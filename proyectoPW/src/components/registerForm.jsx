import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useFetchDataPromise } from "../hooks/useFectchDataPromise";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState(null);
  const { getFetchData } = useFetchDataPromise();

  const onSubmitPersonalInfo = (data) => {
    setPersonalInfo(data); 
    setStep(2); 
  };

  const onSubmitCredentials = async (data) => {
    const userData = {
      ...personalInfo,
      username: data.username,
      password: data.password,
      fk_category_user: 29
    };
  
    const response = await getFetchData({
      endPoint: "user/create", 
      additionalData: userData,
    });

    if (response.code === "COD_OK") {
      console.log("Usuario registrado exitosamente:", response.data);
      reset(); 
      setStep(1); 
    } else {
      console.error("Error al registrar usuario:", response.message);
    }
  };

  return (
    <div className="flex justify-center py-10 bg-black">
      <div className="bg-black border-2 border-[#fcf149] p-10 rounded-lg shadow-md w-full max-w-md">
        <div className="w-full max-w-lg mx-auto">
          <form
            onSubmit={
              step === 1
                ? handleSubmit(onSubmitPersonalInfo)
                : handleSubmit(onSubmitCredentials)
            }
          >
            {step === 1 ? (
              <>
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-[#fcf149]">
                    Información Personal
                  </h3>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="nombre"
                    className="text-white text-sm block mb-2"
                  >
                    Nombre
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("nombre")}
                      type="text"
                      required
                      className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                      placeholder="Ingrese su nombre"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="apellido"
                    className="text-white text-sm block mb-2"
                  >
                    Apellido
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("apellido")}
                      type="text"
                      required
                      className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                      placeholder="Ingrese su apellido"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="nacimiento"
                    className="text-white text-sm block mb-2"
                  >
                    Fecha de Nacimiento
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("nacimiento")}
                      type="date"
                      required
                      className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                      placeholder="Seleccione su fecha de nacimiento"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="email"
                    className="text-white text-sm block mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("email")}
                      type="email"
                      required
                      className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                      placeholder="Ingrese su correo electrónico"
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <button
                    type="submit"
                    className="text-sm font-semibold bg-[#fcf149] text-[#343a40] w-full py-4 rounded-lg hover:bg-[#fcf149cc] transition-colors duration-300"
                  >
                    Siguiente
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-[#fcf149]">
                    Credenciales de la cuenta
                  </h3>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="username"
                    className="text-white text-sm block mb-2"
                  >
                    Nombre de Usuario
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("username")}
                      type="text"
                      required
                      className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                      placeholder="Ingrese su nombre de usuario"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="password"
                    className="text-white text-sm block mb-2"
                  >
                    Contraseña
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("password")}
                      type="password"
                      required
                      className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                      placeholder="Ingrese su contraseña"
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <button
                    type="submit"
                    className="text-sm font-semibold bg-[#fcf149] text-[#343a40] w-full py-4 rounded-lg hover:bg-[#fcf149cc] transition-colors duration-300"
                  >
                    Registrarse
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
