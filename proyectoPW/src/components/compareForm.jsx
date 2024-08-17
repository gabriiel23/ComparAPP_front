import React, { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFectchData";
import Loading from "./messages/loading";
import ErrorMessage from "./messages/errorMessage";
import Message from "./messages/messages";
import { useFetchDataPromise } from "../hooks/useFectchDataPromise";

function CompareForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedShoes, setSelectedShoes] = useState([]);
  const { getFetchData } = useFetchDataPromise();
  const {
    fetchData: { loading, code, message, data },
  } = useFetchData({ endPoint: "shoes/getAll" });

  useEffect(() => {
    if (searchTerm && data) {
      const filteredSuggestions = data.filter((shoe) =>
        shoe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, data]);

  const handleShoeSelect = async (shoe_id) => {
    if (selectedShoes.length < 3) {
      try {
        // Verificar el id del zapato
        console.log("Selected shoe ID:", shoe_id);

        // Consulta el endpoint para obtener más detalles sobre el zapato seleccionado
        const response = await getFetchData({
          endPoint: `characPriceShoes/${shoe_id}`, // Usa shoe.id aquí
          method: "POST",
          additionalData: {
            shoe_id: shoe_id, // Asegúrate de que el ID sea el correcto
          },
        });

        console.log("Response from characPriceShoes endpoint:", response);

        if (response.code === "COD_OK") {
          console.log("Data received:", response.data);
          setSelectedShoes([...selectedShoes, response.data]);
        } else {
          console.error("Error fetching shoe details:", response.message);
        }
      } catch (error) {
        console.error("Error in handleShoeSelect:", error);
      }
    }
    setSearchTerm("");
    setSuggestions([]);
  };

  const handleRemoveShoe = (shoeId) => {
    setSelectedShoes(selectedShoes.filter((shoe) => shoe.shoe_id !== shoeId));
  };

  if (loading) return <Loading />;
  if (code !== "COD_OK") return <ErrorMessage message={message} />;
  if (data.length === 0)
    return <Message message="No hay como comparar en este momento." />;

  return (
    <div className="bg-cover bg-[url('/BackF.png')]">
      <div className="relative flex flex-col items-center py-20 sm:px-0 px-6">
        <div className="relative z-10">
          <h1
            id="tituloo"
            className="text-4xl sm:text-6xl text-center font-extrabold tracking-tight leading-none text-[#fcf149] relative"
          >
            Comparador de zapatos
          </h1>
          <span className="absolute inset-0 bg-white opacity-30 blur-md rounded-lg -z-10"></span>
          <span className="absolute inset-0 bg-white opacity-40 blur-md rounded-lg scale-105 transform -z-20"></span>
        </div>

        <div className="bg-white border-2 border-[#fcf149] py-16 mt-16 sm:w-1/2 w-[96%] text-center rounded-3xl">
          <p className="sm:text-4xl text-2xl sm:font-bold font-bold text-black mb-4">
            -- Añadir zapatos a comparar --
          </p>
          <p className="text-center sm:px-0 px-4 mb-8">
            Busca los zapatos que deseas comparar. <br />A continuación, podrás
            ver las características de cada uno.
          </p>

          {/* Barra de búsqueda */}
          <div className="relative sm:w-full w-[80%] max-w-md mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar zapatos..."
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faef57] focus:border-[#faef57] transition-all duration-300 ease-in-out"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm8-8l4 4"
              />
            </svg>

            {/* Sugerencias */}
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-[#fcf149] rounded-md mt-2 z-10">
                {suggestions.map((shoe) => (
                  <li
                    key={shoe.shoe_id} // Cambia `shoe.id` por `shoe.shoe_id`
                    onClick={() => handleShoeSelect(shoe.shoe_id)} // Pasa solo el `shoe_id`
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-200 hover:rounded-full"
                  >
                    <img
                      src={shoe.image_url}
                      alt={shoe.name}
                      className="h-8 w-8 mr-2 rounded-sm"
                    />
                    {shoe.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Tarjetas de zapatos seleccionados */}
        {selectedShoes.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8 pb-16 sm:px-48 px-0 pt-12">
            {selectedShoes.map((shoe) => (
              <div
                className="relative w-80 bg-white border border-[#fcf149] rounded-3xl shadow"
                key={shoe.shoe_id}
              >
                {/* Botón de cierre */}
                <button
                  onClick={() => handleRemoveShoe(shoe.shoe_id)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-[6px] rounded-full hover:bg-red-700 transition-all"
                >
                  &times;
                </button>

                <div className="flex justify-center">
                  <img
                    className="m-8 rounded-3xl border-2 border-black"
                    src={shoe.image_url}
                    alt={shoe.shoe_name}
                  />
                </div>

                <h5 className="mx-4 mb-4 text-[28px] text-center font-bold tracking-tight text-black">
                  {shoe.shoe_name}
                </h5>

                <div className="px-6">
                  <h5 className="mb-2 text-base font-semibold tracking-tight text-black">
                    <span className="text-gray-600">Marca:</span>{" "}
                    {shoe.brand_name}{" "}
                    {/* Asegúrate de que el nombre de la propiedad sea correcto */}
                  </h5>
                  <h5 className="mb-2 text-base font-semibold tracking-tight text-black">
                    <span className="text-gray-600">Categoría:</span>{" "}
                    {shoe.category_name}{" "}
                    {/* Asegúrate de que el nombre de la propiedad sea correcto */}
                  </h5>
                  <h5 className="text-base font-semibold tracking-tight text-black">
                    <span className="text-gray-600">Tienda:</span>{" "}
                    {shoe.prices && shoe.prices.length > 0
                      ? shoe.prices[0].store_name
                      : "Sin tienda disponible"}{" "}
                    {/* Verifica que haya al menos un precio y accede al nombre de la tienda */}
                  </h5>

                  <h5 className="my-4 text-xl font-semibold tracking-tight text-black">
                    Características
                  </h5>
                  {shoe.characteristics.map((characteristic) => (
                    <h5
                      key={characteristic.characteristic_id}
                      className="mb-2 text-base font-semibold tracking-tight text-black"
                    >
                      <span className="text-gray-600">
                        {characteristic.characteristic_name}:
                      </span>{" "}
                      {characteristic.value}
                    </h5>
                  ))}
                  <h5 className="text-4xl text-center font-bold text-green-500 pb-8">
                    ${shoe.prices[0].price}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CompareForm;
