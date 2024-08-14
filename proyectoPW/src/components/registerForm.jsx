import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div className="font-[sans-serif] bg-white md:h-screen">

            <div className="grid md:grid-cols-2 items-center gap-8 h-full">

                <div className="hidden bg-cover lg:block lg:w-2/3">
                    <img src="/register.png" className="object-contain block mx-auto" alt="login-image" />
                </div>

                <div className="flex items-center md:p-8 p-6 bg-black h-full lg:w-11/12 lg:ml-auto">
                    <form className="max-w-lg w-full mx-auto">
                        <div className="mb-10">
                            <div className="flex justify-end mx-auto pb-6">
                                <img className="w-auto h-7 sm:h-8 rounded-lg" src="https://i.pinimg.com/564x/f8/c9/00/f8c90079ddaeb7b1ec1ceddeda867471.jpg" alt="logo" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#fcf149]">Crea una cuenta</h3>
                        </div>

                        <div>
                            <label htmlFor="name" className="text-white text-xs block mb-2">Nombres</label>
                            <div className="relative flex items-center">
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                                    placeholder="Ingrese sus nombres"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                                    <circle cx="10" cy="7" r="6"></circle>
                                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-8">
                            <label htmlFor="surname" className="text-white text-xs block mb-2">Apellidos</label>
                            <div className="relative flex items-center">
                                <input
                                    name="surname"
                                    type="text"
                                    required
                                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                                    placeholder="Ingrese sus apellidos"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                                    <circle cx="10" cy="7" r="6"></circle>
                                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-8">
                            <label htmlFor="email" className="text-white text-xs block mb-2">Correo Electrónico</label>
                            <div className="relative flex items-center">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                                    placeholder="Ingrese su correo electrónico"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                                    <defs>
                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                            <path d="M0 512h512V0H0Z"></path>
                                        </clipPath>
                                    </defs>
                                    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                        <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"></path>
                                        <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-8">
                            <label htmlFor="birthdate" className="text-white text-xs block mb-2">Fecha de Nacimiento</label>
                            <div className="relative flex items-center">
                                <input
                                    name="birthdate"
                                    type="date"
                                    required
                                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-[#fcf149] px-2 py-3 outline-none"
                                    placeholder="Ingrese su fecha de nacimiento"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" viewBox="0 0 24 24" className="w-[18px] h-[18px] absolute right-2">
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM19 21H5V8h14v13zm-3-11H8v2h8V10zm0 4H8v2h8v-2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-8">
                            <label htmlFor="password" className="text-white text-xs block mb-2">Contraseña</label>
                            <div className="relative flex items-center">
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                                    placeholder="Ingrese la contraseña"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button type="button" className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-[#fcf149] hover:bg-yellow-500 focus:outline-none">
                                Registrarse
                            </button>
                            <p className="mt-6 text-sm text-white">
                                ¿Ya tienes una cuenta?
                                <Link to="/login" className="text-[#fcf149] focus:outline-none focus:underline hover:underline ml-2">
                                    Inicia Sesión
                                </Link>.
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
