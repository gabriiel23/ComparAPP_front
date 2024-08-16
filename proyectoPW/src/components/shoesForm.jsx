import React from "react";
import { useFetchData } from "../hooks/useFectchData";
import Loading from "./messages/loading";
import ErrorMessage from "./messages/errorMessage";
import Message from "./messages/messages";

const ShoesForm = () => {
  const {
    fetchData: { loading, code, message, data },
  } = useFetchData({ endPoint: "shoesprice" });

  if (loading) return <Loading />;
  if (code !== "COD_OK") return <ErrorMessage message={message} />;
  if (data.length === 0)
    return <Message message="No hay zapatos disponibles en este momento." />;

  return (
    <div className="bg-cover bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_481606-89.jpg')]">
      <div className="relative flex flex-col items-center py-20">
        <div className="relative z-10">
          <h1
            id="tituloo"
            className="text-4xl sm:text-6xl text-center font-extrabold tracking-tight leading-none text-[#fcf149] relative"
          >
            ZAPATOS
          </h1>
          <span className="absolute inset-0 bg-black opacity-100 blur-md rounded-lg -z-10"></span>
          <span className="absolute inset-0 bg-black opacity-100 blur-md rounded-lg scale-105 transform -z-20"></span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 pb-16 sm:px-48 px-0">
        {data.map((item) => (
          <div
            className="w-60 bg-black border border-[#fcf149] rounded-lg shadow"
            key={item.shoe_id}
          >
            <img
              className="p-8 rounded-t-lg"
              src={item.image_url}
              alt={item.name}
            />
            <h5 className="mx-4 mb-4 text-xl text-center font-semibold tracking-tight text-[#fcf149]">
              {item.shoe_name}
            </h5>
            <div className="px-6">
              <h5 className="mb-2 text-base font-semibold tracking-tight text-white">
                {" "}
                <span className="text-gray-400">Marca:</span> {item.brand_name}
              </h5>
              <h5 className="mb-2 text-base font-semibold tracking-tight text-white">
                {" "}
                <span className="text-gray-400">Categoría:</span>{" "}
                {item.category_name}
              </h5>

              <h5 className="text-3xl text-center font-bold text-green-700 pb-8">
                <br /> ${item.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesForm;
