import React from "react";
import { useFetchData } from "../hooks/useFectchData";
import { Link } from "react-router-dom";

const BodyForm = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('https://png.pngtree.com/background/20230611/original/pngtree-image-of-colorful-running-shoes-that-are-picture-image_3139634.jpg')] bg-gray-700 bg-blend-multiply w-full">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Comparación de Zapatos
        </h1>
        <p className="mb-8 sm:text-lg text-sm font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          ¡Bienvenidos a ComparAPP!
          <br /> En esta aplicación podrás comparar zapatos en diferentes
          tiendas
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 space-x-8">
          <Link to="/comparar" className="button text-black">
            Comparar
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fillRule="evenodd"
              />
            </svg>
          </Link>

          <Link to="/tiendas" className="button text-black">
            Tiendas
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fillRule="evenodd"
              />
            </svg>
          </Link>

        </div>
      </div>

      <div className="bg-white flex flex-wrap">
        <img
          src="/lineas.png"
          className="sm:py-14 py-8 sm:px-10 px-6"
          alt="separatorS"
        />

        <div className="flex sm:flex-row flex-col w-full sm:px-40 ">
          <div className="sm:w-[50%] flex justify-center">
            <img src="/zapas.png" className="w-72" alt="" />
          </div>

          <div className="sm:w-[80%] sm:px-0 px-6">
            <h1 className="sm:text-4xl text-5xl text-center font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl sm:py-14 py-10">
              ComparAPP
            </h1>
            <p className="sm:text-lg text-base">
              ¡Bienvenido a nuestra plataforma de comparación de zapatos! <br />
              Aquí podrás explorar una amplia variedad de modelos, desde las
              últimas tendencias hasta los clásicos atemporales. Nuestra misión
              es ayudarte a encontrar el par perfecto, comparando precios,
              estilos, marcas y características para que tomes la mejor decisión
              de compra. Navega por nuestras tiendas, descubre ofertas
              exclusivas y haz que tu experiencia de compra sea más fácil y
              satisfactoria. <br />
              El uso de esta app es sencillo, en el apartado de Comparar,
              deberás seleccionar los zapatos, y realizar la comparativa de los
              mismos, viendo tus preferencias, gustos y, en general, lo que se
              acople a lo que buscas. <br />
              ¡Empieza ahora y encuentra los zapatos ideales para cada ocasión!{" "}
              <br />
            </p>
          </div>
        </div>
        <img
          src="/lineas.png"
          className="sm:py-14 py-8 sm:px-10 px-6"
          alt="separatorF"
        />
      </div>
    </section>
  );
};

export default BodyForm;
