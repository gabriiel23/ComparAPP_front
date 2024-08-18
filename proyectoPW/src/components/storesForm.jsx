import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetchData } from "../hooks/useFectchData";
import Loading from "./messages/loading";
import ErrorMessage from "./messages/errorMessage";
import Message from "./messages/messages";
import { useFetchDataPromise } from "../hooks/useFectchDataPromise";

const StoresForm = () => {
  const { getFetchData } = useFetchDataPromise();
  const navigate = useNavigate();
  const {
    fetchData: { loading, code, message, data },
  } = useFetchData({ endPoint: "store/getAll" });

  const handleStoreClick = async (store_id) => {
    const response = await getFetchData({
      endPoint: `storeshoes/${store_id}`,
      method: "POST",
      additionalData: {
        store_id: store_id, // Asegúrate de que `idCiudad` sea el identificador correcto
      },
    });

    const { code, data, message } = response;

    if (code === "COD_OK") {
      navigate(`/shoeStore`, { state: { storeData: data } });
    } else {
      console.error("Error fetching store data:", message);
    }
  };

  if (loading) return <Loading />;
  if (code !== "COD_OK") return <ErrorMessage message={message} />;
  if (data.length === 0)
    return <Message message="No hay tiendas disponibles en este momento." />;

  return (
    <div className="content-center sm:px-48 sm:py-12">
      <hr className="border-black" />
      <div className="flex items-center justify-center py-8">
        <button className="overflow-hidden relative w-72 p-2 h-20 bg-black text-[#faef57] border-none rounded-lg text-4xl font-bold cursor-pointer z-10 group">
          TIENDAS
          <span className="absolute w-96 h-60 -top-32 -left-8 bg-[#faef57] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
          <span className="text-black group-hover:opacity-100 pl-4 p-3 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Disponibles
          </span>
        </button>
      </div>

      <div className="flex justify-center">
        <Link 
          to="/createStore"
          className="bg-[#fced44] hover:bg-[#d8cb3e] border-2 border-black px-6 py-3 rounded-xl mb-4 font-semibold"> 
            Crear una tienda 
        </Link>
      </div>

      <hr className="border-black" />
      <div>
        <p className="text-base py-8 sm:px-48 px-6 text-center">
          ¡Mira los zapatos que ofrecen diferentes tiendas! <br />
          Existe gran variedad de tiendas donde podrás ver los zapatos que más
          te gusten con sus características. <br />
          No pierdas más el tiempo y revisa, ¡Tus zapatos están esperando por
          ti!
        </p>
      </div>
      <hr className="border-black" />
      <div className="flex flex-wrap items-center justify-center gap-8 py-12">
        {data.map((store) => (
          <div
            className="block cursor-pointer"
            key={store.store_id}
            onClick={() => handleStoreClick(store.store_id)}
          >
            <div className="bg-[#faef57] rounded-xl shadow-sm shadow-black outline outline-white -outline-offset-8">
              <div className="group overflow-hidden relative duration-500 hover:after:translate-x-18 hover:before:translate-y-9 hover:before:-translate-x-24 hover:rotate-12 flex justify-center items-center h-44 w-60 bg-black rounded-xl outline outline-white -outline-offset-8">
                <div className="z-10 flex flex-col items-center">
                  <span className="text-[#faef57] text-center px-4 text-3xl font-semibold pt-4">
                    {store.name}
                  </span>
                  <img
                    className="w-[60px]"
                    src="https://t4.ftcdn.net/jpg/01/36/55/49/360_F_136554929_JG7RLQNfAKpAQlmRmdV7QhbEM1PDt6k2.jpg"
                    alt={store.name}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoresForm;
