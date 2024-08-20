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
    console.log("handleShoeSelect called with shoe_id:", shoe_id);
    const userId = localStorage.getItem("userId");
    console.log("userId from localStorage:", userId);

    if (selectedShoes.length < 3) {
      try {
        const response = await getFetchData({
          endPoint: `characPriceShoes/${shoe_id}`,
          method: "POST",
          additionalData: {
            shoe_id: shoe_id,
          },
        });

        if (response.code === "COD_OK") {
          console.log("Shoe details fetched successfully:", response.data);
          setSelectedShoes([...selectedShoes, response.data]);

          // Solo enviar los datos a history/create si el usuario está logueado
          if (userId) {
            const historyData = {
              fk_shoes: shoe_id, // ID del zapato seleccionado
              fk_user: userId, // ID del usuario desde localStorage
              date: new Date().toISOString().split("T")[0], // Fecha actual en formato YYYY-MM-DD
            };
            console.log("Sending history data:", historyData);
            await getFetchData({
              endPoint: "history/create",
              method: "POST",
              additionalData: historyData,
            });

            console.log("History data sent successfully");
          } else {
            console.log("User not logged in, skipping history/create request.");
          }
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
    return <Message message="No hay zapatos para comparar en este momento." />;

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
          <p className="sm:text-[42px] text-2xl font-bold text-black mb-4">
            -- Añadir zapatos a comparar --
          </p>
          <p className="text-center sm:px-0 px-4 mb-8">
            Busca los zapatos que deseas comparar. <br />A continuación, podrás
            ver las características de cada uno.
          </p>

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

            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-[#fcf149] rounded-md mt-2 z-10">
                {suggestions.map((shoe) => (
                  <li
                    key={shoe.shoe_id}
                    onClick={() => handleShoeSelect(shoe.shoe_id)}
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

        {selectedShoes.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8 pb-16 sm:px-48 px-0 pt-12">
            {selectedShoes.map((shoe) => (
              <div
                className="relative w-80 bg-white border border-[#fcf149] rounded-3xl shadow"
                key={shoe.shoe_id}
              >
                <button
                  onClick={() => handleRemoveShoe(shoe.shoe_id)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-[6px] rounded-full hover:bg-red-700 transition-all"
                >
                  &times;
                </button>

                <div className="flex justify-center">
                  <img
                    className="m-8 rounded-3xl border-2 border-black w-52"
                    src={shoe.image_url}
                    alt={shoe.shoe_name}
                  />
                </div>

                <hr className="border-[#fced44] mb-8" />

                <h5 className="mx-4 mb-8 text-3xl text-center font-bold tracking-tight text-black">
                  {shoe.shoe_name}
                </h5>

                <div className="px-6">
                  <div className="flex flex-row items-center my-4">
                    <h5 className="text-base font-semibold tracking-tight text-gray-600 items-center ">
                      Marca:
                    </h5>

                    <h5 className="text-lg ml-12 font-semibold tracking-tight ">
                      {shoe.brand_name}{" "}
                    </h5>
                  </div>

                  <div className="flex flex-row items-center my-4">
                    <h5 className="text-base font-semibold tracking-tight text-gray-600 items-center ">
                      Categoría:
                    </h5>
                    <h5 className="text-lg ml-6 font-semibold tracking-tight">
                      {shoe.category_name}
                    </h5>
                  </div>

                  <div className="flex flex-row items-center my-4">
                    <h5 className="text-base font-semibold tracking-tight text-gray-600 items-center ">
                      Tiendas:
                    </h5>
                  </div>

                  {shoe.prices.map((priceDetail, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center my-2"
                    >
                      <h5 className="text-lg ml-4 font-semibold tracking-tight text-yellow-500">
                        {priceDetail.store_name}: {priceDetail.price} $
                      </h5>
                    </div>
                  ))}

                  <hr className="border-[#fced44] my-6" />

                  <h5 className="my-6 text-xl font-semibold tracking-tight text-gray-700">
                    Características:
                  </h5>

                  {shoe.characteristics.map((characteristic) => (
                    <div
                      key={characteristic.characteristic_id}
                      className="flex flex-row items-center my-4 "
                    >
                      <h5 className="text-base font-semibold tracking-tight text-gray-600 items-center ">
                        {characteristic.characteristic_name}:
                      </h5>
                      <h5 className="text-lg ml-12 font-semibold tracking-tight ">
                        {characteristic.value} /10
                      </h5>
                    </div>
                  ))}
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
