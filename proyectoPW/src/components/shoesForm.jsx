import React, { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFectchData";
import Loading from "./messages/loading";
import ErrorMessage from "./messages/errorMessage";
import Message from "./messages/messages";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const ShoesForm = () => {
  const {
    fetchData: {
      loading: loadingShoes,
      code: codeShoes,
      message: messageShoes,
      data: shoesData,
    },
  } = useFetchData({ endPoint: "shoesprice" });

  const { fetchData: storesData } = useFetchData({ endPoint: "store/getAll" });
  const { fetchData: brandsData } = useFetchData({ endPoint: "brand/all" });
  const { fetchData: categoriesData } = useFetchData({ endPoint: "category/all" });

  const [selectedStore, setSelectedStore] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [visibleShoes, setVisibleShoes] = useState(8); // Número de zapatos visibles

  const { user } = useAuth();

  useEffect(() => {
    if (shoesData) {
      let filtered = shoesData;

      if (selectedStore) {
        filtered = filtered.filter((shoe) => shoe.store_name === selectedStore);
      }
      if (selectedBrand) {
        filtered = filtered.filter((shoe) => shoe.brand_name === selectedBrand);
      }
      if (selectedCategory) {
        filtered = filtered.filter((shoe) => shoe.category_name === selectedCategory);
      }

      setFilteredShoes(filtered);
    }
  }, [selectedStore, selectedBrand, selectedCategory, shoesData]);

  const handleLoadMore = () => {
    setVisibleShoes((prevVisibleShoes) => prevVisibleShoes + 8);
  };
  const handleLoadLess = () => {
    setVisibleShoes((prevVisibleShoes) => prevVisibleShoes - 4);
  }

  if (
    loadingShoes ||
    storesData.loading ||
    brandsData.loading ||
    categoriesData.loading
  ) {
    return <Loading />;
  }

  if (codeShoes !== "COD_OK") {
    return <ErrorMessage message={messageShoes} />;
  }

  if (shoesData.length === 0) {
    return <Message message="No hay zapatos disponibles en este momento." />;
  }

  return (
    <div className="bg-cover bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_481606-89.jpg')]">
      <div className="relative flex flex-col items-center pt-24 mx-20">
        <div className="relative z-10">
          <h1
            id="tituloo"
            className="text-5xl sm:text-6xl text-center font-extrabold tracking-tight leading-none text-[#fcf149] relative"
          >
            TODOS LOS ZAPATOS <br />
            <span className="text-2xl">Disponibles</span>
          </h1>
          <span className="absolute inset-0 bg-black opacity-100 blur-md rounded-lg -z-10"></span>
          <span className="absolute inset-0 bg-black opacity-100 blur-md rounded-lg scale-105 transform -z-20"></span>
        </div>
      </div>

      {user?.role === "admin" && (
        <div className="flex justify-center mt-6">
          <Link
            to="/createShoe"
            className="bg-black text-[#fced44] border-2 border-[#fced44] hover:bg-gray-900 px-6 py-3 rounded-xl mb-4 font-semibold"
          >
            Crear un zapato
          </Link>
        </div>
      )}

      <div className="sm:px-60 px-10 pt-20 pb-8">
        <h1 className="text-white text-xl">Filtrar resultados</h1>

        <div className="flex sm:flex-row flex-col sm:gap-20 gap-0">
          <form className="my-6 flex-grow">
            <label htmlFor="underline_select_tienda" className="sr-only">
              Tienda
            </label>
            <select
              id="tienda"
              className="block p-3 rounded-xl w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-[#fcf149] dark:bg-black appearance-none focus:outline-none focus:ring-0 focus:border-[#7a7632] peer"
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
            >
              <option value="">Escoge una tienda</option>
              {storesData.data.map((store) => (
                <option key={store.name} value={store.name}>
                  {store.name}
                </option>
              ))}
            </select>
          </form>

          <form className="my-6 flex-grow">
            <label htmlFor="underline_select_marca" className="sr-only">
              Marca
            </label>
            <select
              id="marca"
              className="block p-3 rounded-xl w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-[#fcf149] dark:bg-black appearance-none focus:outline-none focus:ring-0 focus:border-[#7a7632] peer"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">Escoge una marca</option>
              {brandsData.data.map((brand) => (
                <option key={brand.name} value={brand.name}>
                  {brand.name}
                </option>
              ))}
            </select>
          </form>

          <form className="my-6 flex-grow">
            <label htmlFor="underline_select_categoria" className="sr-only">
              Categoria
            </label>
            <select
              id="categoria"
              className="block p-3 rounded-xl w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-[#fcf149] dark:bg-black appearance-none focus:outline-none focus:ring-0 focus:border-[#7a7632] peer"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Escoge una categoria</option>
              {categoriesData.data
                .filter((category) => category.fk_categories === 30)
                .map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
            </select>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 pb-16 sm:px-48 px-0">
        {filteredShoes.slice(0, visibleShoes).map((item, index) => (
          <div
            className="w-60 bg-black border border-[#fcf149] rounded-lg shadow"
            key={`${item.shoe_id}-${index}`}
          >
            <img
              className="p-8 rounded-t-lg"
              src={item.image_url}
              alt={item.shoe_name}
            />
            <h5 className="mx-4 mb-4 text-xl text-center font-semibold tracking-tight text-[#fcf149]">
              {item.shoe_name}
            </h5>
            <div className="px-6">
              <h5 className="mb-2 text-base font-semibold tracking-tight text-white">
                <span className="text-gray-400">Marca:</span> {item.brand_name}
              </h5>
              <h5 className="mb-2 text-base font-semibold tracking-tight text-white">
                <span className="text-gray-400">Categoría:</span>{" "}
                {item.category_name}
              </h5>
              <h5 className="text-base font-semibold tracking-tight text-white">
                <span className="text-gray-400">Tienda:</span> {item.store_name}
              </h5>
              <h5 className="text-3xl text-center font-bold text-green-500 pb-8">
                <br /> ${item.price}
              </h5>
            </div>
          </div>
        ))}
      </div>

      <div className="flex sm:flex-row flex-col justify-center gap-6">
        {/* Botón para cargar más zapatos */}
        {visibleShoes < filteredShoes.length && (
          <div className="flex justify-center sm:pb-12">
            <button
              onClick={handleLoadMore}
              className="bg-black text-[#fced44] border-2 border-[#fced44] hover:bg-gray-900 px-6 py-3 rounded-xl font-semibold"
            >
              Cargar más
            </button>
          </div>
        )}

        {/* Botón para cargar menos zapatos */}
        {visibleShoes < filteredShoes.length && (
          <div className="flex justify-center pb-12">
            <button
              onClick={handleLoadLess}
              className="bg-black text-[#fced44] border-2 border-[#fced44] hover:bg-gray-900 px-6 py-3 rounded-xl font-semibold"
            >
              Cargar menos
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default ShoesForm;
