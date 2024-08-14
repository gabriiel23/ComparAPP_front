import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-4xl">N + 1</h2>
                            <p className="text-lg max-w-xl mt-3 text-gray-300">
                                Dale un programa a alguien y lo frustrarás por un día; <br />
                                enséñale a programar y lo frustrarás toda la vida.
                            </p>

                            <h2 className="text-2xl mt-8 font-bold text-white sm:text-4xl">;</h2>
                            <p className="text-lg max-w-xl mt-3 text-gray-300">
                                Sería genial que el error típico de programación <br />
                                fuera tan solo la falta de un simple punto y coma.<br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img className="w-auto h-7 sm:h-8 rounded-lg" src="https://i.pinimg.com/564x/f8/c9/00/f8c90079ddaeb7b1ec1ceddeda867471.jpg" alt="logo" />
                            </div>
                            <p className="mt-3 text-black text-xl">Inicia sesión con tu cuenta</p>
                        </div>

                        <div className="mt-8">
                            <form>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-base text-black">Correo electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="example@example.com"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-base text-black">Contraseña</label>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="contraseña"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-300 transform bg-[#fcf149] rounded-lg hover:bg-[#cbc246] focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </form>

                            <p className="mt-6 text-base text-center text-black">
                                ¿Aún no tienes cuenta?
                                <Link to="/register" className="text-blue-700 focus:outline-none focus:underline hover:underline ml-2">
                                    Regístrate aquí
                                </Link>.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default LoginForm;
