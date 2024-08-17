import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useFetchDataPromise } from "../hooks/useFectchDataPromise";

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const [userId, setUserId] = useState(null); // Nuevo estado para almacenar el ID del usuario
    const { register, handleSubmit } = useForm();
    const { getFetchData } = useFetchDataPromise();
  
    const onSubmitPersonalInfo = async (data) => {
      try {
        localStorage.setItem("personalInfo", JSON.stringify(data));
  
        const userResult = await getFetchData({
          method: "POST",
          endPoint: "user/create",
          additionalData: {
            name: data.nombre,
            lastname: data.apellido,
            birthday_date: data.nacimiento,
            email: data.email,
            fk_category_user: 29,
          },
        });
  
        console.log("Raw user result:", userResult); // Para depuración
  
        if (userResult && userResult.code === "COD_OK" && userResult.id_user) {
          setUserId(userResult.id_user);
          setStep(2);
        } else {
          alert("Error al registrar el usuario. Inténtalo nuevamente.");
        }
      } catch (error) {
        console.error("Error al guardar la información personal:", error);
        alert("Hubo un problema al guardar la información. Inténtalo de nuevo.");
      }
    };
  
    const onSubmitCredentials = async (data) => {
      const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
  
      // Combina los datos personales con las credenciales
      const credentialData = {
        username: data.username,
        password: data.password,
        fk_user: userId, // Incluye el ID del usuario en los datos de credenciales
      };
  
      try {
        // Crear las credenciales
        const credentialResult = await getFetchData({
          method: "POST",
          endPoint: "credential/create",
          additionalData: credentialData,
        });
  
        if (credentialResult) {
          alert("Te has registrado exitosamente. ¡Bienvenido!");
          window.location.href = "/login";
        } else {
          alert("Error en el registro de credenciales. Inténtalo nuevamente.");
        }
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        alert(
          "Hubo un problema al intentar registrarte. Inténtalo de nuevo más tarde."
        );
      }
    };
  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="hidden bg-cover lg:block lg:w-2/3">
          <img
            src="/register.png"
            className="object-contain block mx-32"
            alt="register-image"
          />
        </div>
        <div className="flex items-center md:p-8 p-6 bg-black h-full lg:w-11/12 lg:ml-auto">
          <form
            onSubmit={handleSubmit(
              step === 1 ? onSubmitPersonalInfo : onSubmitCredentials
            )}
            className="max-w-lg w-full mx-auto"
          >
            {step === 1 ? (
              <>
                <div className="mb-10">
                  <div className="flex justify-end mx-auto pb-6">
                    <img
                      className="w-auto h-7 sm:h-8 rounded-lg"
                      src="https://i.pinimg.com/564x/f8/c9/00/f8c90079ddaeb7b1ec1ceddeda867471.jpg"
                      alt="logo"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-[#fcf149]">
                    Crea una cuenta
                  </h3>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="text-white text-xs block mb-2"
                  >
                    Nombres
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("nombre")}
                      type="text"
                      required
                      className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                      placeholder="Ingrese sus nombres"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="10" cy="7" r="6"></circle>
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="surname"
                    className="text-white text-xs block mb-2"
                  >
                    Apellidos
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("apellido")}
                      type="text"
                      required
                      className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                      placeholder="Ingrese sus apellidos"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="10" cy="7" r="6"></circle>
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="birthdate"
                    className="text-white text-xs block mb-2"
                  >
                    Fecha de Nacimiento
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("nacimiento")}
                      type="date"
                      required
                      className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                      placeholder="Ingrese su fecha de nacimiento"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      viewBox="0 0 24 24"
                      className="w-[18px] h-[18px] absolute right-2"
                    >
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM19 21H5V8h14v13zm-3-11H8v2h8V10zm0 4H8v2h8v-2z"></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="email"
                    className="text-white text-xs block mb-2"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="10" cy="7" r="6"></circle>
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="bg-[#fcf149] text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-300"
                  >
                    Siguiente
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-[#fcf149]">
                    Crea tus credenciales
                  </h3>
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="text-white text-xs block mb-2"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="10" cy="7" r="6"></circle>
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="password"
                    className="text-white text-xs block mb-2"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="10" cy="7" r="6"></circle>
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="bg-[#fcf149] text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-300"
                  >
                    Registrar
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
