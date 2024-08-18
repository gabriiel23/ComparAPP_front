import React from 'react'

const HistoryUser = () => {
    return (
        <div>
            <div className="my-20">
                <h1 className="text-center text-4xl font-bold">Historial del usuario</h1>
                <p className="text-center text-lg">Aqui podrás ver las busquedas que ha realizado el usuario</p>
            </div>

            <div>
                <section className="pb-24 bg-white">
                    <div className="">
                        <div className="p-8 sm:p-14 bg-gray-100 rounded-3xl">
                            
                            <h2 className="text-center font-medium text-3xl text-black mb-4">Hoy, 08 de agosto del 2024</h2>

                            <div className="">
                                <div className="">
                                    <p className="font-medium text-lg leading-8 text-indigo-600">Busquedas</p>
                                </div>
                            </div>


                            <div className="flex sm:flex-row flex-col sm:gap-20 gap-0">
                                <div className="my-6 flex-grow">
                                    <img
                                        src=""
                                        alt="imagenZapa"
                                        className="rounded-xl"
                                    />
                                </div>

                                <div className="my-6 flex-grow">
                                    <h5 className="font-semibold text-xl leading-9 text-black mb-1 ">
                                        "Nombre del zapato que busco"
                                    </h5>
                                </div>

                                <div className="my-6 flex-grow">
                                    <p className="font-semibold text-xl leading-8 text-black">"Hora que realizo la busqueda"</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HistoryUser
