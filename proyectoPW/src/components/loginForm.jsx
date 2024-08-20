import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useFetchDataPromise } from "../hooks/useFectchDataPromise"; // Asegúrate de que tu hook está correctamente importado
import { useAuth } from "../hooks/AuthContext";
const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { getFetchData } = useFetchDataPromise();
  const { login } = useAuth();
  const onSubmit = async (data) => {
    try {
      const response = await getFetchData({
        endPoint: "login",
        method: "POST",
        additionalData: data,
      });

      if (
        response &&
        response.code === "COD_OK" &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        const userData = response.data[0]; // Accede al primer (y probablemente único) elemento en el array 'data'
        login(userData);
        // Guarda el token, userId y rol en localStorage
        localStorage.setItem("userId", userData.userId);
        localStorage.setItem("token", userData.token);
        console.log("userId stored:", localStorage.getItem("userId"));
        console.log("token stored:", localStorage.getItem("token"));
        // Obtener rol del usuario
        await fetchUserRole(userData.userId);
      } else {
        // Si la respuesta no contiene datos válidos, muestra el mensaje recibido
        console.error(
          "Error al iniciar sesión:",
          response.message || "Error desconocido"
        );
      }
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la solicitud
      console.error("Error en la solicitud:", error);
    }
  };

  const fetchUserRole = async (userId) => {
    try {
      const response = await getFetchData({
        endPoint: `usercategorie/${userId}`,
        method: "POST",
      });

      if (
        response &&
        response.code === "COD_OK" &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        const userRoleData = response.data[0];
        // Establece el rol del usuario en localStorage
        localStorage.setItem("role", userRoleData.category_name); // Asumiendo que el rol está en `role`
        console.log("roles stored:", localStorage.getItem("role"));
        // Redirige según el rol
        if (userRoleData.category_name === "admin") {
          navigate("/"); // Ruta para el dashboard de admin
        } else {
          navigate("/tiendas"); // Ruta para el dashboard de usuario
        }
      } else {
        console.error(
          "Error al obtener el rol del usuario:",
          response.message || "Error desconocido"
        );
      }
    } catch (error) {
      console.error("Error en la solicitud de rol:", error);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center sm:h-screen sm:py-0 py-24">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-4xl">
                N + 1
              </h2>
              <p className="text-lg max-w-xl mt-3 text-gray-300">
                Dale un programa a alguien y lo frustrarás por un día; <br />
                enséñale a programar y lo frustrarás toda la vida.
              </p>
              <h2 className="text-2xl mt-8 font-bold text-white sm:text-4xl">
                ;
              </h2>
              <p className="text-lg max-w-xl mt-3 text-gray-300">
                Sería genial que el error típico de programación <br />
                fuera tan solo la falta de un simple punto y coma.
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img
                  className="w-auto h-7 sm:h-8 rounded-lg"
                  src="https://i.pinimg.com/564x/f8/c9/00/f8c90079ddaeb7b1ec1ceddeda867471.jpg"
                  alt="logo"
                />
              </div>
              <p className="mt-3 text-black text-xl">
                Inicia sesión con tu cuenta
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-base text-black"
                  >
                    Nombre de usuario
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="usuario"
                    {...register("username", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-base text-black">
                      Contraseña
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="contraseña"
                    {...register("password", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-300 transform bg-[#fcf149] rounded-lg hover:bg-[#cbc246] focus:outline-none focus:bg-[#c5bc41] focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>

              <p className="mt-6 text-base text-center text-black">
                ¿Aún no tienes cuenta?
                <Link
                  to="/register"
                  className="text-blue-700 focus:outline-none focus:underline hover:underline ml-2"
                >
                  Regístrate aquí
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
