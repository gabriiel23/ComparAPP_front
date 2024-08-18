import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderForm from "../components/headerForm";
import BodyForm from "../components/bodyForm";
import FooterForm from "../components/footerForm";

import CompararForm from "../components/compareForm"; 
import TiendasForm from "../components/storesForm";
import ShoeStore from "../components/shoeByStore";
import ShoesForm from "../components/shoesForm";
import AboutForm from "../components/aboutForm";
import CreateShoe from "../components/createShoe"
import CreateStore from "../components/createStore"
import HistoryUser from "../components/historyUser"

import Login from "../components/loginForm"
import Register from "../components/registerForm";


const Formpages = () => {
  return (
    <div className="font-serif">
      
      <HeaderForm />

        <Routes>
          <Route path="/" element={<BodyForm />} />
          <Route path="/comparar" element={<CompararForm />} />
          <Route path="/tiendas" element={<TiendasForm />} />
          <Route path="/createStore" element={<CreateStore />} />
          <Route path="/shoeStore" element={<ShoeStore />} />
          <Route path="/zapatos" element={<ShoesForm />} />
          <Route path="/createShoe" element={<CreateShoe />} />
          <Route path="/about" element={<AboutForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/historial" element={<HistoryUser />} />
        </Routes>
        
      <FooterForm />
    </div>
  );
}

export default Formpages;
