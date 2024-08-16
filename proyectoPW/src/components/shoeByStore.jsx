import React from "react";
import { useLocation } from "react-router-dom";

const ShoeByStore = () => {
  const location = useLocation();
  const { storeData } = location.state || { storeData: [] };

  return (
    <div className="bg-cover bg-[url('https://i.pinimg.com/736x/09/8b/02/098b02b3138104e753440a7655ac38d5.jpg')] min-h-screen py-12">
      {/* Sección de bienvenida */}
      <div className="bg-black shadow-md rounded-3xl max-w-6xl mx-auto p-8 ">
        <div className="flex flex-row items-center py-6 space-x-8">
          <img
            className="h-28 rounded-full border-2 border-[#fcf149]"
            src="https://t4.ftcdn.net/jpg/01/36/55/49/360_F_136554929_JG7RLQNfAKpAQlmRmdV7QhbEM1PDt6k2.jpg"
            alt=""
          />
          <h1 className="text-5xl font-extrabold text-center text-[#fcf149]">
            Bienvenido a la tienda "
            {storeData.length > 0 ? storeData[0].store_name : "Desconocido"}"
          </h1>
        </div>
        <div>
          <p className="text-lg text-gray-200 text-center my-8">
            En "{storeData.length > 0 ? storeData[0].store_name : "Desconocido"}
            ", nos dedicamos a ofrecerte los mejores zapatos para cualquier
            ocasión. Explora nuestra colección y encuentra el par perfecto que
            se ajuste a tu estilo y comodidad.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col items-center py-20 sm:px-0 px-6">
        <div className="relative z-10">
          <h1
            id="tituloo"
            className="text-4xl sm:text-5xl text-center font-extrabold tracking-tight leading-none text-[#fcf149] relative"
          >
            Nuestra colección
          </h1>
          <span className="absolute inset-0 bg-black opacity-100 blur-md rounded-lg -z-10"></span>
          <span className="absolute inset-0 bg-black opacity-100 blur-md rounded-lg scale-105 transform -z-20"></span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 pb-16 sm:px-48 px-0">
        {storeData.map((shoe) => (
          <div
            className="w-60 bg-black border border-[#fcf149] rounded-lg shadow"
            key={shoe.shoe_id}
          >
            <img className="p-8" src={shoe.image_url} alt={shoe.shoe_name} />
            <h5 className="mx-4 mb-4 text-2xl text-center font-semibold tracking-tight text-[#fcf149]">
              {shoe.shoe_name}
            </h5>
            <div className="px-6">
              <h5 className="text-base font-semibold tracking-tight text-white">
                {" "}
                <span className="text-gray-400">Marca:</span> {shoe.brand_name}
              </h5>
              <h5 className="text-3xl text-center font-bold text-green-500 pb-8">
                <br /> ${shoe.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeByStore;
