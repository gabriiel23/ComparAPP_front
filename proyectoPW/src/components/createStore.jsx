import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFetchDataPromise } from '../hooks/useFectchDataPromise'; // Ajusta la ruta según tu estructura

const CreateStore = () => {
  const [storeId, setStoreId] = useState(null);
  const { register, handleSubmit, reset } = useForm(); // Agregar el método reset
  const { getFetchData } = useFetchDataPromise();

  const onSubmitStoreInfo = async (data) => {
    try {
      const storeResult = await getFetchData({
        method: "POST",
        endPoint: "store/create",
        additionalData: {
          name: data.store,
          // email: data.email, // Descomentar cuando se use
        },
      });

      console.log("Datos enviados de la tienda:", storeResult);

      if (storeResult && storeResult.code === "COD_OK" && storeResult) {
        setStoreId(storeResult);
        alert("Tienda creada con éxito");
      } else {
        alert("ERROR al crear la tienda");
      }
      
      // Resetea el formulario después de un envío exitoso
      reset();
    } catch (error) {
      console.error("Error al guardar la información de la tienda:", error);
      alert("Hubo un problema al guardar la información. Inténtalo de nuevo.");
      
      // Resetea el formulario incluso si ocurre un error
      reset();
    }
  };

  return (
    <div>
      <div className='bg-gray-200 sm:mx-96 mx-4 sm:px-0 px-4'>
        <div className="flex justify-center pt-24">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aoZ9TNrc_pinClu1h-pKIgULddYoky9hvw&s"
            alt=""
            className="w-28 rounded-md"
          />
        </div>

        <h1 className="text-center text-4xl font-bold mt-6 mb-14">Crear una nueva tienda</h1>

        <form className="max-w-md mx-auto pb-14" onSubmit={handleSubmit(onSubmitStoreInfo)}>
          <div className="relative z-0 w-full mb-10 group">
            <input
              type="text"
              name="store"
              id="store_id"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
              {...register("store", { required: true })} // Registra el input
            />
            <label
              htmlFor="store"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre de la tienda
            </label>
          </div>

          {/* AGREGAR ESTE CAMPO EN EL BACK */}
          {/* <div className="relative z-0 w-full mb-12 group">
            <input
              type="email"
              name="email"
              id="email_id"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
              {...register("email", { required: true })} // Registra el input
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Correo electrónico
            </label>
          </div> */}

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-black bg-[#fced44] hover:bg-[#dccf3e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
