import React, { useState } from "react";
import { useFetchDataPromise } from "../hooks/useFectchDataPromise";
import { useFetchData } from "../hooks/useFectchData";
import Loading from "./messages/loading";
import ErrorMessage from "./messages/errorMessage";
import Message from "./messages/messages";

const CreateShoe = () => {
  const { getFetchData } = useFetchDataPromise();
  const { fetchData: brandsData } = useFetchData({ endPoint: "brand/all" });
  const { fetchData: categoriesData } = useFetchData({
    endPoint: "category/all",
  });

  const [selectedBrand, setSelectedBrand] = useState(""); // Guarda el ID de la marca
  const [selectedCategory, setSelectedCategory] = useState(""); // Guarda el ID de la categoría
  const [image, setImage] = useState(null); // Nuevo estado para la imagen

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Obtiene el primer archivo
    if (file) {
      setImage(file); // Guarda el archivo en lugar de la URL
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene el envío por defecto del formulario

    // Crear un objeto FormData
    const formData = new FormData();
    formData.append("name", document.getElementById("shoe_id").value); // Añadir nombre del zapato
    formData.append("brand_id", selectedBrand); // Añadir ID de marca
    formData.append("fk_categoryshoes", selectedCategory); // Añadir ID de categoría
    if (image) {
      formData.append("image_url", image); // Añadir imagen si se ha subido
    }

    console.log("Datos del FormData", formData);

    try {
      const userResult = await getFetchData({
        method: "POST",
        endPoint: "shoes/create",
        additionalData: formData, // Usa FormData en lugar de un objeto plano
      });

      if (userResult.code === "COD_OK") {
        // Manejar la creación exitosa del zapato
        console.log("Shoe created successfully!");
      } else {
        // Manejar el error de creación
        console.error("Error creating shoe:", userResult.message);
      }
    } catch (error) {
      console.error("Error sending data:", error);
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
    <div>
      <div>
        <div className="bg-gray-200 sm:mx-96 px-6">
          <div className="flex justify-center pt-16">
            <img
              src="https://i.pinimg.com/1200x/64/3f/4b/643f4b7c45b50b19bf88598a91929d14.jpg"
              alt=""
              className="w-28 rounded-md"
            />
          </div>

          <h1 className="text-center text-4xl font-bold mt-6 mb-10">
            Crear un nuevo zapato
          </h1>

          <form className="max-w-md mx-auto pb-14" onSubmit={handleSubmit}>
            <div>
              <label></label>
              <div className="relative z-0 w-full mb-12 group">
                <input
                  type="text"
                  name="store"
                  id="shoe_id"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="store"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombre del zapato
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-12 group flex-grow">
              <select
                id="brand_id"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                required
              >
                <option className="text-[#fced44]" value="">
                  Escoger
                </option>
                {brandsData.data.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {" "}
                    {/* El valor es el ID */}
                    {brand.name} {/* El texto visible es el nombre */}
                  </option>
                ))}
              </select>
              <label
                htmlFor="underline_select_marca"
                className="absolute text-sm text-gray-500 -translate-y-7 scale-75 top-3 -z-10 origin-[0]"
              >
                Marca a la que pertenece
              </label>
            </div>

            <div className="relative z-0 w-full mb-8 group flex-grow">
              <select
                id="category_id"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option className="text-[#fced44]" value="">
                  Escoger
                </option>
                {categoriesData.data
                  .filter((category) => category.fk_categories === 30)
                  .map((category) => (
                    <option key={category.id} value={category.id}>
                      {" "}
                      {/* El valor es el ID */}
                      {category.name} {/* El texto visible es el nombre */}
                    </option>
                  ))}
              </select>
              <label
                htmlFor="underline_select_categoria"
                className="absolute text-sm text-gray-500 -translate-y-7 scale-75 top-3 -z-10 origin-[0]"
              >
                Categoria a la que pertenece
              </label>
            </div>

            <div className="flex items-center justify-center w-full mb-10">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pb-4">
                  <svg
                    className="w-8 h-8 mb-2 text-gray-500"
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
                  <p className="mb-2 text-sm text-gray-500">
                    Subir una imagen del zapato
                  </p>
                  <p className="text-xs text-gray-500">SVG, PNG o JPG</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept=".svg, .png, .jpg, .jpeg"
                  onChange={handleImageUpload} // Manejador de cambio para la imagen
                />

                {/* Vista previa de la imagen si está subida */}
                {image && (
                  <img
                    src={URL.createObjectURL(image)} // Usa URL.createObjectURL para vista previa
                    alt="Vista previa"
                    className="w-24 rounded-md"
                  />
                )}
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2.5 bg-black text-white rounded-full text-lg"
              >
                Crear zapato
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateShoe;
