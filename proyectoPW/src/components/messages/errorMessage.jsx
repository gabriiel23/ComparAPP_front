// ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <div className="space-y-2 py-52">

            <div
                role="alert"
                className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 mx-20 px-20 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
            >
                <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-24 w-5 flex-shrink-0 mr-2 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    ></path>
                </svg>
                <p className="text-2xl "><span classNameName='font-bold'>ERROR</span> - Ha sucedido algo, por favor intente de nuevo mas tarde.</p>
            </div>

        </div>
    );
}

export default ErrorMessage;
