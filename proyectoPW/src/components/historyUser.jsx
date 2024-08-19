import React, { useState, useEffect } from 'react';
import { useFetchData } from '../hooks/useFectchData';
import Loading from './messages/loading';
import ErrorMessage from './messages/errorMessage';

const HistoryUser = () => {
  const [userData, setUserData] = useState(null);
  const { fetchData: { loading, code, message, data } } = useFetchData({ endPoint: "user/getAll" });

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (code !== "COD_OK") return <ErrorMessage message={message} />;
  if (!userData) return <p>No se encontraron datos del usuario.</p>;

  return (
    <div className="flex flex-row gap-12 my-24 px-32">
      <div id='User' className="w-1/3">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col items-center pb-10 py-8">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://st3.depositphotos.com/3538469/15750/i/450/depositphotos_157501024-stock-photo-business-man-icon.jpg" alt="FotoPerfil" />
            <h5 className="my-2 text-lg font-medium text-black">{userData.name} {userData.lastname}</h5>
            <span className="my-2 text-sm font-medium text-black">"username"</span>
            <span className="my-2 text-sm font-medium text-black">{userData.email}</span>
            <span className="my-2 text-sm font-medium text-black">{userData.fk_category_user}</span>
          </div>
        </div>
      </div>

      <div id='History' className="w-2/3">
        <div className="mb-8">
          <h1 className="text-center text-4xl font-bold">Historial del usuario</h1>
          <p className="text-center text-lg">Aquí podrás ver las búsquedas que ha realizado el usuario</p>
        </div>

        <div className="">
          <div className="p-8 bg-gray-100 rounded-3xl">
            <div className="">
              <p className="font-semibold text-lg leading-8 text-indigo-600 mb-8">Búsquedas:</p>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-20 gap-0">
              <div className="flex-grow">
                <img
                  src=""
                  alt="imagenZapa"
                  className="rounded-xl"
                />
              </div>

              <div className="flex-grow">
                <h5 className="font-medium text-lg text-black ">
                  "Nombre del zapato que busco"
                </h5>
              </div>

              <div className="flex-grow">
                <p className="font-medium text-lg text-black">"Hora que realizó la búsqueda"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryUser;
