import React from "react";
import { useFetchData } from "../hooks/useFectchData";

function CompareForm(props) {
  return (
    <div className="bg-cover bg-[url('/BackZapas.png')]">
      <div className="relative flex flex-col items-center py-20 sm:px-0 px-6">
        <div className="relative z-10">
          <h1
            id="tituloo"
            className="text-4xl sm:text-6xl text-center font-extrabold tracking-tight leading-none text-black relative">
            Comparador de zapatos
          </h1>
          <span className="absolute inset-0 bg-[#fcf149] opacity-30 blur-md rounded-lg -z-10"></span>
          <span className="absolute inset-0 bg-[#fcf149] opacity-40 blur-md rounded-lg scale-105 transform -z-20"></span>
        </div>

        <div className="bg-gray-300 border-dashed border-2 border-black py-16 mt-16 sm:w-1/2 w-[96%] text-center rounded-3xl">
          <p className="sm:text-3xl text-2xl sm:font-normal font-semibold mb-4">
            -- Añadir zapatos a comparar --
          </p>
          <p className="text-center sm:px-0 px-4 mb-8">
            Busca los zapatos que deseas comparar. <br />
            A continuación, podrás ver las características de cada uno.
          </p>

          {/* Barra de búsqueda */}
          <div className="relative sm:w-full w-[80%] max-w-md mx-auto">
            <input
              type="text"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareForm;
