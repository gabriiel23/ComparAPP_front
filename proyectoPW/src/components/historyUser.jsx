import React, { useState, useEffect } from "react";
import Loading from "./messages/loading";
import ErrorMessage from "./messages/errorMessage";
import { useAuth } from "../hooks/AuthContext";
import { useFetchData } from "../hooks/useFectchData"; // Asegúrate de que este hook esté definido

const HistoryUser = () => {
  const { user } = useAuth(); // Obtén los datos del usuario desde el contexto de autenticación
  const [userData, setUserData] = useState(null);
  const [historyData, setHistoryData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(5); // Inicialmente muestra 5 elementos

  // Destructura las respuestas del hook useFetchData
  const { fetchData: userFetchData } = useFetchData({ endPoint: `user/getById/${localStorage.getItem("userId")}` });
  const { fetchData: historyFetchData } = useFetchData({ endPoint: `historiuser/${localStorage.getItem("userId")}` });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Datos del usuario
        if (userFetchData.loading) return; // Maneja el estado de carga
        if (userFetchData.code !== "COD_OK") throw new Error(userFetchData.message);

        setUserData(userFetchData.data[0]);

        // Historial de búsqueda
        if (historyFetchData.loading) return; // Maneja el estado de carga
        if (historyFetchData.code !== "COD_OK") throw new Error(historyFetchData.message);

        setHistoryData(historyFetchData.data); // Almacena el historial de búsqueda
      } catch (error) {
        console.error(error.message); // Manejo de errores
      }
    };

    fetchData();
  }, [userFetchData, historyFetchData]);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 5); // Muestra 5 elementos más
  };

  if (userFetchData.loading || historyFetchData.loading) return <Loading />;
  if (userFetchData.code !== "COD_OK" || historyFetchData.code !== "COD_OK") return <ErrorMessage message={userFetchData.message || historyFetchData.message} />;

  return (
    <div className="flex flex-row gap-12 my-24 px-32">
      <div id="User" className="w-1/3">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col items-center pb-10 py-8">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://st3.depositphotos.com/3538469/15750/i/450/depositphotos_157501024-stock-photo-business-man-icon.jpg"
              alt="FotoPerfil"
            />
            <h5 className="my-2 text-lg font-medium text-black">Datos Usuario</h5>
            <span className="my-2 text-sm font-medium text-black">{userData?.name} {userData?.lastname}</span>
            <span className="my-2 text-sm font-medium text-black">{user?.role}</span>
            <span className="my-2 text-sm font-medium text-black">{userData?.email}</span>
            <span className="my-2 text-sm font-medium text-black">{userData?.birthday_date ? new Date(userData.birthday_date).toLocaleDateString() : ""}</span>
          </div>
        </div>
      </div>

      <div id="History" className="w-2/3">
        <div className="mb-8">
          <h1 className="text-center text-4xl font-bold">Historial del usuario</h1>
          <p className="text-center text-lg">Aquí podrás ver las búsquedas que ha realizado el usuario</p>
        </div>

        <div className="p-8 bg-gray-100 rounded-3xl">
          <div className="">
            <p className="font-semibold text-lg leading-8 text-indigo-600 mb-8">Búsquedas:</p>
          </div>

          {historyData.length === 0 ? (
            <p className="text-center text-lg">No se encontraron búsquedas.</p>
          ) : (
            historyData.slice(0, visibleItems).map((item, index) => (
              <div key={index} className="flex sm:flex-row flex-col sm:gap-20 gap-0 mb-4">
                <div className="flex-grow">
                  <img src={item.image_url} alt={`Imagen de ${item.shoe_name}`} className="rounded-xl" />
                </div>
                <div className="flex-grow">
                  <h5 className="font-medium text-lg text-black">{item.shoe_name}</h5>
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-lg text-black">{new Date(item.consultation_date).toLocaleDateString()}</p>
                </div>
              </div>
            ))
          )}

          {visibleItems < historyData.length && (
            <div className="text-center mt-8">
              <button onClick={loadMore} className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">Cargar más</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryUser;