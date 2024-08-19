import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Formpages from "./pages/formpages";
import { AuthProvider } from "./hooks/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Formpages />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
