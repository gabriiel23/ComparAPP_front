import React from "react";
import { useFetchData } from "../hooks/useFectchData";
function CompareForm(props) {

  return (
    <div className="flex flex-col items-center py-20">
      <h1
        id="tituloo"
        className=" text-4xl text-center font-extrabold tracking-tight leading-none text-black 
          md:text-5xl lg:text-6xl
          relative
          before:content-[''] before:absolute before:inset-0 before:bg-[#fcf149] before:opacity-30 before:blur-md before:-z-10
          before:rounded-lg
          after:content-[''] after:absolute after:inset-0 after:bg-[#fcf149] after:opacity-40 after:blur-md after:-z-10 after:transform       after:scale-105
          shadow-[0_0_10px_#fcf149]
          transition-shadow duration-300 ease-in-out
          hover:shadow-[0_0_20px_#fcf149]
        "
      >
        Comparador de zapatos
      </h1>

      <div className="bg-gray-300 border-dashed border-2 border-black py-16 mt-16 w-1/2 text-center rounded-3xl">
        <p className="text-3xl mb-4">-- Añadir zapatos a comparar --</p>
        <p class="text-center mb-8">
          Busca el zapatos que deseas comparar. <br />A continuación, podrás ver
          las características de cada uno.
        </p>
        <form className="">
          <input
            className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md pl-10 pr-10"
            placeholder="Busca aqui..."
            required=""
            type="text"
          />
          <button
            type="button"
            className="absolute left-2 inset-y-0 flex items-center p-1"
          ></button>
        </form>
      </div>
    </div>
  );
}

export default CompareForm;
