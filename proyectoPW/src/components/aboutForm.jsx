import React from 'react';

const AboutForm = () => {
    return (
        <div>
            <div className="container py-36 px-48 ">
                <div className="text-center justify-center items-center flex flex-wrap gap-3 text-white ">
                    <p className="text-2xl">Universidad Internacional del Ecuador</p>
                    <img width="36" height="36" src="https://img.icons8.com/color/48/ehcuador.png" alt="ecu" />
                </div>
                <div class=" flex flex-wrap justify-center py-6 text-center">
                    <h1 className="text-8xl font-bold text-[#fcf149]">¿Quiénes Somos?</h1>
                    <p class="text-white text-lg pt-10">
                        Somos estudiantes de la carrera de Tecnologías de la Información y Comunicación de <br />
                        la Universidad Internacional del Ecuador (UIDE) de la sede Loja <br />
                        Actualmente estamos en cuarto semestre. Como parte de nuestra materia de Programacion Web, <br />
                        surge este proyecto de "Comparación de Zapatos". <br />
                        Mas abajo podrás encontrar mas informarción acerca de nosotros.
                    </p>
                </div>
                <section className="flex justify-center items-center pt-8">
                    <button
                        href="/"
                        className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#fcf149] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            id="Layer_1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 92.25 122.88"
                            style={{ enableBackground: 'new 0 0 92.25 122.88' }}
                            xmlSpace="preserve"
                            className="w-5 h-5"
                        >
                            <style type="text/css">
                                {`.st0{fill-rule:evenodd;clip-rule:evenodd;}`}
                            </style>
                            <g>
                                <path
                                    className="st0"
                                    d="M68.51,106.28c-5.59,6.13-12.1,11.62-19.41,16.06c-0.9,0.66-2.12,0.74-3.12,0.1 c-10.8-6.87-19.87-15.12-27-24.09C9.14,86.01,2.95,72.33,0.83,59.15c-2.16-13.36-0.14-26.22,6.51-36.67 c2.62-4.13,5.97-7.89,10.05-11.14C26.77,3.87,37.48-0.08,48.16,0c10.28,0.08,20.43,3.91,29.2,11.92c3.08,2.8,5.67,6.01,7.79,9.49 c7.15,11.78,8.69,26.8,5.55,42.02c-3.1,15.04-10.8,30.32-22.19,42.82V106.28L68.51,106.28z M46.12,23.76 c12.68,0,22.95,10.28,22.95,22.95c0,12.68-10.28,22.95-22.95,22.95c-12.68,0-22.95-10.27-22.95-22.95 C23.16,34.03,33.44,23.76,46.12,23.76L46.12,23.76z"
                                ></path>
                            </g>
                        </svg>
                        <span
                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                        >
                            Ubicación
                        </span>
                    </button>
                </section>

                <hr class="my-24"/>

                <div class="flex flex-wrap">
                    <div class="flex flex-row gap-32">
                        <div>
                            <img 
                                class="hover:scale-125 ease-in duration-150 rounded-full border-double border-4 border-white shadow-2xl shadow-[#a0e8de]" 
                                src="https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/403907459_802850258311458_6423515825016807957_n.jpg?ccb=11-4&oh=01_Q5AaIMlcpONMq_gOchow3b-JZsc-e1TrmdCyZzRyXK5wmfkl&oe=66C3630A&_nc_sid=5e03e0&_nc_cat=111" 
                                alt="angel" 
                            />
                        </div>

                        <div class="">
                            <h1 class="text-5xl font-bold text-center text-[#fcf149]">Angel Sarango</h1> <br />
                            <p class="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed odio laboriosam ea id dignissimos quia? Numquam, magnam officia velit quod dolore fugit vitae molestias explicabo voluptates cum minus nesciunt! <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi voluptatum tempora rerum, iure repellat et voluptates iusto sed, dignissimos aut ex nam nemo perferendis soluta officia dolorem maxime. Ab?
                            </p>
                        </div>
                    </div>
                </div>

                <hr class="my-24"/>

                <div class="flex flex-wrap">
                    <div class="flex flex-row gap-32">
                        <div class="">
                            <h1 class="text-5xl font-bold text-center text-[#fcf149]">Gabriel Díaz</h1> <br />
                            <p class="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed odio laboriosam ea id dignissimos quia? Numquam, magnam officia velit quod dolore fugit vitae molestias explicabo voluptates cum minus nesciunt! <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi voluptatum tempora rerum, iure repellat et voluptates iusto sed, dignissimos aut ex nam nemo perferendis soluta officia dolorem maxime. Ab?
                            </p>
                        </div>

                        <div>
                            <img 
                                class="hover:scale-125 ease-in duration-150 rounded-full border-double border-4 border-white shadow-2xl shadow-[#a0e8de]" 
                                src="https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/454063134_862712121944903_5526693609634257660_n.jpg?ccb=11-4&oh=01_Q5AaILE4zhwQRsWUoz6LQe1FwepG7U5h7Z4VKSFLaQChYo-o&oe=66C3AB6B&_nc_sid=5e03e0&_nc_cat=110" 
                                alt="gabriel" 
                            />
                        </div>
                    </div>
                </div>
                
                <hr class="mt-24"/>

            </div>
        </div>
    );
}

export default AboutForm;
