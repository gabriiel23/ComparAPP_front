import React from 'react';

const opciones = [
    {
        name: "Nike",
        imageUrl: "https://thumbs.dreamstime.com/b/fondo-negro-vectorial-del-logotipo-de-nike-marca-para-uso-impreso-ropa-deportiva-y-fitness-183282388.jpg",
    },
    {
        name: "Adidas",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/019/136/302/original/adidas-logo-adidas-icon-free-free-vector.jpg",
    },
    {
        name: "Puma",
        imageUrl: "https://assets.turbologo.com/blog/es/2019/11/19132946/puma-logo-cover-958x575.png",
    },
    {
        name: "Converse",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwyJ2tYeDx7jsZMeYW-Ka9wDGbEi1laZyDQ&s",
    },
];

const StoresForm = () => {
    return (
        <div className='content-center px-48 py-12'>
            <hr className='border-black' />

            <div className='flex items-center justify-center py-8'>
                <button
                    className="overflow-hidden relative w-72 p-2 h-20 bg-black text-[#faef57] border-none rounded-lg text-3xl font-bold cursor-pointer z-10 group"
                >
                    TIENDAS
                    <span
                        className="absolute w-96 h-60 -top-32 -left-8 bg-[#faef57] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                    ></span>
                    <span
                        className="text-black group-hover:opacity-100 pl-8 p-3 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                    >
                        Disponibles
                    </span>
                </button>
            </div>

            <hr className='border-black' />

            <div>
                <p className='text-base py-8 px-48 text-center'>
                    ¡Mira los zapatos que ofrecen diferentes tiendas! <br />
                    Existe gran variedad de tiendas donde podrás ver los zapatos que más te gusten con sus características. <br />
                    No pierdas más el tiempo y revisa, ¡Tus zapatos están esperando por ti!
                </p>
            </div>

            <hr className='border-black' />

            <div className='flex flex-wrap items-center justify-center gap-8 py-12'>
                {opciones.map((item, index) => (
                    <a href="#" className="block" key={index}>
                        <div className="bg-[#faef57] rounded-xl shadow-sm shadow-black outline outline-white -outline-offset-8">
                            <div className="group overflow-hidden relative duration-500 hover:after:translate-x-18 hover:before:translate-y-9 hover:before:-translate-x-24 hover:rotate-12 flex justify-center items-center h-44 w-60 bg-black rounded-xl outline outline-white -outline-offset-8">
                                <div className="z-10 flex flex-col items-center">
                                    <span className="text-[#faef57] text-4xl font-bold">{item.name}</span>
                                    <img
                                        className="w-[60px]"
                                        src={item.imageUrl}
                                        alt={item.name}
                                    />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default StoresForm;
