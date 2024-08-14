import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderForm from "../components/headerForm";
import FooterForm from "../components/footerForm";
import BodyForm from "../components/bodyForm";
import TiendasForm from "../components/storesForm";
import CompararForm from "../components/compareForm";
import AboutForm from "../components/aboutForm";
import Login from "../components/loginForm"
import Register from "../components/registerForm";

const Formpages = () => {
  return (
    <div class="font-serif">
      <HeaderForm />
        <Routes>
          <Route path="/" element={<BodyForm />} />
          <Route path="/comparar" element={<CompararForm />} />
          <Route path="/tiendas" element={<TiendasForm />} />
          <Route path="/about" element={<AboutForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <FooterForm />
    </div>
  );
}

export default Formpages;
