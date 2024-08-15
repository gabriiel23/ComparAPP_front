import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderForm = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://i.pinimg.com/564x/f8/c9/00/f8c90079ddaeb7b1ec1ceddeda867471.jpg" className="h-10 rounded-lg" alt="Flowbite Logo" />
                    <span className="self-center text-[28px] font-semibold whitespace-nowrap text-white">ComparAPP</span>
                </Link>

                <div className="sm:flex items-center sm:order-2">
                    

                    <Link to="/login" className="sm:ml-4 sm:mb-0 mb-2 sm:inline-flex hidden items-top sm:px-4 px-3 sm:py-2 py-1 border border-[#fcf149] sm:text-sm text-xs font-medium rounded-lg bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">Iniciar Sesión</Link>

                    <Link to="/register" className="sm:ml-4 sm:mb-0 mb-2 sm:inline-flex hidden items-top sm:px-4 px-3 sm:py-2 py-1 border border-[#fcf149] sm:text-sm text-xs font-medium rounded-lg bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">Registrarse</Link>


                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        data-collapse-toggle="navbar-search"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg sm:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-search"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full sm:flex sm:w-auto sm:order-1`} id="navbar-search">
                    <div className="relative mt-3 sm:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="searchR" className="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Buscar..."/>
                    </div>

                    <ul className="text-lg flex flex-col p-4 sm:p-0 mt-4 font-medium border border-gray-100 rounded-lg sm:space-x-8 rtl:space-x-reverse sm:flex-row sm:mt-0 sm:border-0 bg-black">
                        <li>
                            <Link to="/" className="block py-2 px-3 text-white rounded sm:bg-transparent sm:text-[#faef57] sm:p-0 hover:bg-gray-700 sm:hover:bg-transparent" aria-current="page">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/comparar" className="block py-2 px-3 text-white rounded hover:bg-gray-700 sm:hover:bg-transparent sm:hover:text-[#faef57] sm:p-0">Comparar</Link>
                        </li>
                        <li>
                            <Link to="/tiendas" className="block py-2 px-3 text-white rounded hover:bg-gray-700 sm:hover:bg-transparent sm:hover:text-[#faef57] sm:p-0">Tiendas</Link>
                        </li>
                        <li>
                            <Link to="/about" className="block py-2 px-3 text-white rounded hover:bg-gray-700 sm:hover:bg-transparent sm:hover:text-[#faef57] sm:p-0">Sobre nosotros</Link>
                        </li>
                        {/* Aquí se añade el botón de Iniciar Sesión cuando el menú está abierto en dispositivos pequeños */}
                        <li className="sm:hidden mt-4">
                            <Link to="/login" className="text-white inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg bg-black hover:bg-gray-800 border-[#fcf149] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#dcd23b]">Iniciar Sesión</Link>
                        </li>
                        <li className="sm:hidden mt-4">
                            <Link to="/register" className="text-white inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg bg-black hover:bg-gray-800 border-[#fcf149] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#dcd23b]">Registrarse</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderForm;
