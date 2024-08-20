import React, { useState, useEffect } from "react";
import Loading from "./messages/loading";
import ErrorMessage from "./messages/errorMessage";
import { useAuth } from "../hooks/AuthContext";
import { useFetchDataPromise } from "../hooks/useFectchDataPromise"; // Asegúrate de que el hook esté correctamente importado
import { useFetchData } from "../hooks/useFectchData";

const HistoryUser = () => {
  const { user } = useAuth(); // Obtén los datos del usuario desde el contexto de autenticación
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { getFetchData } = useFetchDataPromise(); // Hook personalizado para manejar las solicitudes HTTP

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (!userId) {
          throw new Error("No se encontró el ID del usuario.");
        }

        const response = await getFetchData({
          method: "POST", // Verifica que el método de tu API sea correcto, en algunos casos debe ser 'GET'
          endPoint: `user/getById/${userId}`,
        });

        console.log("FFD", response);

        // Cambia la verificación de código para que coincida con 'COD_OK'
        if (response.code !== "COD_OK") {
          throw new Error(
            response.message || "Error al obtener los datos del usuario."
          );
        }

        // Como response.data es un array, accede al primer elemento
        const userData = response.data[0];
        setUserData(userData); // Establece los datos del usuario en el estado
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [getFetchData]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

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
            <h5 className="my-2 text-lg font-medium text-black">
              Datos Usuario
            </h5>
            <span className="my-2 text-sm font-medium text-black">
              {userData.name} {userData.lastname}
            </span>{" "}
            {/* Muestra nombre y apellido */}
            <span className="my-2 text-sm font-medium text-black">
              {user.role}
            </span>{" "}
            {/* Muestra el rol almacenado en localStorage */}
            <span className="my-2 text-sm font-medium text-black">
              {userData.email}
            </span>{" "}
            {/* Muestra el email */}
            <span className="my-2 text-sm font-medium text-black">
              {new Date(userData.birthday_date).toLocaleDateString()}
            </span>{" "}
            {/* Muestra la fecha de nacimiento en un formato legible */}
            {/* Puedes añadir más datos del usuario aquí */}
          </div>
        </div>
      </div>

      <div id="History" className="w-2/3">
        <div className="mb-8">
          <h1 className="text-center text-4xl font-bold">
            Historial del usuario
          </h1>
          <p className="text-center text-lg">
            Aquí podrás ver las búsquedas que ha realizado el usuario
          </p>
        </div>

        {/* Aquí puedes añadir la lógica para mostrar el historial de búsqueda */}
        <div className="">
          <div className="p-8 bg-gray-100 rounded-3xl">
            <div className="">
              <p className="font-semibold text-lg leading-8 text-indigo-600 mb-8">
                Búsquedas:
              </p>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-20 gap-0">
              <div className="flex-grow">
                <img src="" alt="imagenZapa" className="rounded-xl" />
              </div>

              <div className="flex-grow">
                <h5 className="font-medium text-lg text-black ">
                  "Nombre del zapato que buscó"
                </h5>
              </div>

              <div className="flex-grow">
                <p className="font-medium text-lg text-black">
                  "Hora en que realizó la búsqueda"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryUser;