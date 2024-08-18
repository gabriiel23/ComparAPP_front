import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useFetchDataPromise } from "../hooks/useFectchDataPromise";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState(null);
  const { register, handleSubmit } = useForm();
  const { getFetchData } = useFetchDataPromise();
  const navigate = useNavigate();

  const onSubmitPersonalInfo = async (data) => {
    try {
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

      const { code, data: userData, message } = userResult;
      console.log("Raw user result:", userResult);

      if (code === "COD_OK" && userData && userData.length > 0) {
        const createdUser = userData[0]; // Ajusta según la estructura de `userData`
        setUserId(createdUser.id); // Guardar el ID del usuario
        setStep(2); // Avanzar al siguiente paso
      } else {
        alert(
          message || "Error al registrar el usuario. Inténtalo nuevamente."
        );
      }
    } catch (error) {
      console.error("Error al guardar la información personal:", error);
      alert("Hubo un problema al guardar la información. Inténtalo de nuevo.");
    }
  };

  const onSubmitCredentials = async (data) => {
    const credentialData = {
      username: data.username,
      password: data.password,
      fk_user: userId, // Usar el ID del usuario guardado
    };

    try {
      const credentialResult = await getFetchData({
        method: "POST",
        endPoint: "credential/create",
        additionalData: credentialData,
      });

      const { code, message } = credentialResult;

      if (code === "COD_OK") {
        alert("Te has registrado exitosamente. ¡Bienvenido!");
        navigate("/login"); // Redirige a /login
      } else {
        alert(
          message ||
            "Error en el registro de credenciales. Inténtalo nuevamente."
        );
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
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full bg-[#fcf149] text-black font-semibold text-sm py-3 px-4 rounded-md"
                  >
                    Continuar
                  </button>
                </div>
              </>
            ) : (
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
                      placeholder="Ingrese nombre de usuario"
                    />
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
                      placeholder="Ingrese una contraseña"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full bg-[#fcf149] text-black font-semibold text-sm py-3 px-4 rounded-md"
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
