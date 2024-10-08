import React, { useState, useEffect } from "react";
import { useFetchDataPromise } from "../hooks/useFectchDataPromise";
import { useFetchData } from "../hooks/useFectchData";
import Loading from "./messages/loading";
import ErrorMessage from "./messages/errorMessage";
import Message from "./messages/messages";
import { useNavigate } from "react-router-dom";

const CreateShoe = () => {
  const navigate = useNavigate();
  const { getFetchData } = useFetchDataPromise();
  const { fetchData: brandsData } = useFetchData({ endPoint: "brand/all" });
  const { fetchData: categoriesData } = useFetchData({
    endPoint: "category/all",
  });

  const [selectedBrandId, setSelectedBrandId] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [image, setImage] = useState(null);
  const [brandMap, setBrandMap] = useState(new Map());
  const [categoryMap, setCategoryMap] = useState(new Map());

  useEffect(() => {
    console.log("Brands Data:", brandsData.data);
    if (brandsData.data && Array.isArray(brandsData.data)) {
      const brandMapping = new Map(
        brandsData.data.map((brand) => [brand.name, brand.brand_id])
      );
      setBrandMap(brandMapping);
      console.log("Brand Mapping:", brandMapping);
    } else {
      console.error("Brands data is not in the expected format.");
    }

    console.log("Categories Data:", categoriesData.data);
    if (categoriesData.data && Array.isArray(categoriesData.data)) {
      const categoryMapping = new Map(
        categoriesData.data.map((category) => [
          category.name,
          category.category_id,
        ])
      );
      setCategoryMap(categoryMapping);
      console.log("Category Mapping:", categoryMapping);
    } else {
      console.error("Categories data is not in the expected format.");
    }
  }, [brandsData.data, categoriesData.data]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Guardar el archivo directamente
      console.log("Selected Image File:", file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!selectedBrandId || !selectedCategoryId || !image) {
      console.error("Todos los campos son obligatorios.");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", document.getElementById("shoe_id").value);
    formData.append("brand_id", selectedBrandId);
    formData.append("fk_categoryshoes", selectedCategoryId);
    if (FormData.image) {
      formData.append('image', FormData.image);
    }
  
    try {
      const userResult = await getFetchData({
        method: "POST",
        endPoint: "shoes/create",
        additionalData: formData,
      });
  
      console.log("Fetch Data Result:", userResult);
  
      if (userResult.code === "COD_OK") {
        console.log("Zapato creado satisfactoriamente!");
        alert("FELICIDADES, el zapato se ha creado correctamente.")
      } else {
        console.error("Error al crear el zapato:", userResult.message);
        alert("ERROR, no se pudo crear el zapato, intente de nuevo mas tarde.")
        navigate("/zapatos")
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

  if (!Array.isArray(brandsData.data) || !Array.isArray(categoriesData.data)) {
    return <Message message="Datos no válidos." />;
  }

  return (
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

          <div className="relative z-0 w-full mb-12 group flex-grow">
            <select
              id="brand_id"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black peer"
              onChange={(e) => {
                const brandId = brandMap.get(e.target.value);
                console.log("Selected Brand:", e.target.value, "ID:", brandId);
                setSelectedBrandId(brandId);
              }}
              required
            >
              <option className="text-[#fced44]" value="">
                Escoger
              </option>
              {brandsData.data.map((brand) => (
                <option key={brand.brand_id} value={brand.name}>
                  {brand.name}
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
              onChange={(e) => {
                const categoryId = categoryMap.get(e.target.value);
                console.log(
                  "Selected Category:",
                  e.target.value,
                  "ID:",
                  categoryId
                );
                setSelectedCategoryId(categoryId);
              }}
              required
            >
              <option className="text-[#fced44]" value="">
                Escoger
              </option>
              {categoriesData.data
                .filter((category) => category.fk_categories === 30) // Ajusta esto según tu lógica
                .map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
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
                onChange={handleImageUpload}
              />

              {image && (
                <img
                  src={image}
                  alt="Vista previa"
                  className="w-24 rounded-md"
                />
              )}
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2.5 bg-black text-white rounded-full text-lg

"
            >
              Crear Zapato
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateShoe;
