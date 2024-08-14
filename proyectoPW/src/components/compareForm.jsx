import React from "react";
import { useFetchData } from "../hooks/useFectchData";

function CompareForm(props) {
  return (
    <div className="flex flex-col items-center py-20 sm:px-0 px-6">
      <h1
        id="tituloo"
        className="text-4xl text-center font-extrabold tracking-tight leading-none text-black 
          md:text-5xl lg:text-6xl
          relative
          before:content-[''] before:absolute before:inset-0 before:bg-[#fcf149] before:opacity-30 before:blur-md before:-z-10
          before:rounded-lg
          after:content-[''] after:absolute after:inset-0 after:bg-[#fcf149] after:opacity-40 after:blur-md after:-z-10 after:transform after:scale-105
          shadow-[0_0_10px_#fcf149]
          transition-shadow duration-300 ease-in-out
          hover:shadow-[0_0_20px_#fcf149]"
      >
        Comparador de zapatos
      </h1>

      <div className="bg-gray-300 border-dashed border-2 border-black py-16 mt-16 sm:w-1/2 w-[96%] text-center rounded-3xl">
        <p className="sm:text-3xl text-2xl sm:font-normal font-semibold mb-4">
          -- Añadir zapatos a comparar --
        </p>
        <p className="text-center sm:px-0 px-4 mb-8">
          Busca los zapatos que deseas comparar. <br />
          A continuación, podrás ver las características de cada uno.
        </p>

        {/* Barra de búsqueda */}
        <div className="relative sm:w-full w-[90%] max-w-md mx-auto">
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
  );
}

export default CompareForm;
