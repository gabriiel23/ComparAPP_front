import React, { useState } from 'react';
import { useFetchData } from "../hooks/useFectchData";
import Loading from "./messages/loading";
import ErrorMessage from "./messages/errorMessage";
import Message from "./messages/messages";
import { useFetchDataPromise } from '../hooks/useFectchDataPromise';
import { useForm } from 'react-hook-form';

const CreateShoe = () => {
  const { fetchData: brandsData } = useFetchData({ endPoint: "brand/all" });
  const { fetchData: categoriesData } = useFetchData({ endPoint: "category/all" });

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const [shoeId, setShoeId] = useState(null);
  const { register, handleSubmit, reset } = useForm(); // Agregar el método reset
  const { getFetchData } = useFetchDataPromise();

  const onSubmitShoeInfo = async (data) => {
    try {
      const shoeResult = await getFetchData({
        method: "POST",
        endPoint: "shoes/create",
        additionalData: {
          name: data.shoe,
          brand_id: data.brand,
          fk_categoryshoes: data.category,
          image_url: data.image,
        },
      });
      
      console.log("Datos enviados de la tienda:", shoeResult);
      
      if (shoeResult && shoeResult.code === "COD_OK" && shoeResult) {
        setShoeId(shoeResult);
        alert("Zapato creado con éxito");
      } else {
        alert("ERROR al crear el zapato");
      }
      
      // Resetea el formulario después de un envío exitoso
      reset();
    } catch (error) {
      console.error("Error al guardar la información de la tienda:", error);
      alert("Hubo un problema al guardar la información. Inténtalo de nuevo.");
      
      // Resetea el formulario incluso si ocurre un error
      reset();
    }
  };
  
  if (brandsData.loading || categoriesData.loading) {
    return <Loading />;
  }

  if (brandsData.code !== "COD_OK" || categoriesData.code !== "COD_OK") {
    return <ErrorMessage message="Error al cargar los datos." />;
  }

  if (brandsData.data.length === 0 || categoriesData.data.length === 0) {
    return <Message message="No hay datos disponibles." />;
  }

  return (
    <div className='bg-gray-200 sm:mx-96 px-6'>
      <div className="flex justify-center pt-16">
        <img
          src="https://i.pinimg.com/1200x/64/3f/4b/643f4b7c45b50b19bf88598a91929d14.jpg"
          alt=""
          className="w-28 rounded-md"
        />
      </div>

      <h1 className="text-center text-4xl font-bold mt-6 mb-10">Crear un nuevo zapato</h1>

      <form className="max-w-md mx-auto pb-14" onSubmit={handleSubmit(onSubmitShoeInfo)}>

        <div className="relative z-0 w-full mb-12 group">
          <input
            type="text"
            name="shoe"
            id="zapato"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            required
            {...register("name", { required: true })}
          />
          <label
            htmlFor="store"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Nombre del zapato
          </label>
        </div>

        <div className="relative z-0 w-full mb-12 group flex-grow">
          <select
            id="marca"
            name="brand"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            {...register("brand", { required: true })}
          >
            <option className="text-[#fced44]" value="">Escoger</option>
            {brandsData.data.map((brand) => (
              <option key={brand.name} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>
          <label
            htmlFor="underline_select_marca"
            className="absolute text-sm text-gray-500 -translate-y-7 scale-75 top-3 -z-10 origin-[0]">
            Marca a la que pertenece
          </label>
        </div>

        <div className="relative z-0 w-full mb-8 group flex-grow">
          <select
            name='category'
            id="categoria"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            {...register("category", { required: true })}
          >
            <option className="text-[#fced44]" value="">Escoger</option>
            {categoriesData.data
              .filter((category) => category.fk_categories === 30)
              .map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
          </select>
          <label
            htmlFor="underline_select_marca"
            className="absolute text-sm text-gray-500 -translate-y-7 scale-75 top-3 -z-10 origin-[0]">
            Categoria a la que pertenece
          </label>
        </div>

        <div className="flex items-center justify-center w-full mb-10">
          <label
            name="image"
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            {...register("image", { required: true })}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500">Subir una imagen del zapato</p>
              <p className="text-xs text-gray-500">SVG, PNG o JPG</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept=".svg, .png, .jpg, .jpeg"
            />
          </label>
        </div>


        <div className="flex justify-center">
          <button
            type="submit"
            className="text-black bg-[#fced44] hover:bg-[#dccf3e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateShoe;
