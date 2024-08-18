import React, { useState } from 'react';

const CreateStore = () => {
  const [storeName, setStoreName] = useState('');
  // const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Crear el objeto con los datos de la tienda
    const storeData = {
      store: storeName
      // email: email Descomentar esto cuando se agregue el campo de correo
    };

    try {
      const response = await fetch('store/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(storeData),
      });

      if (response.ok) {
        // Manejar la respuesta exitosa
        const result = await response.json();
        console.log('Tienda creada:', result);
        // Reiniciar el formulario o redirigir al usuario, según sea necesario
        setStoreName('');
        // setEmail('');
      } else {
        // Manejar errores de la respuesta
        console.error('Error al crear la tienda:', response.statusText);
      }
    } catch (error) {
      // Manejar errores de red
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <div className='bg-gray-200 sm:mx-96 px-6'>
        <div className="flex justify-center pt-16">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aoZ9TNrc_pinClu1h-pKIgULddYoky9hvw&s"
            alt=""
            className="w-28 rounded-md"
          />
        </div>

        <h1 className="text-center text-4xl font-bold mt-6 mb-10">Crear una nueva tienda</h1>

        <form className="max-w-md mx-auto pb-14" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-10 group">
            <input
              type="text"
              name="store"
              id="store_id"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)} // Actualiza el estado
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
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
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
