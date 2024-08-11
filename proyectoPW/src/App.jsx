import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";

import Formpages from "./pages/formpages";

function App() {
  return (
    <>
    <BrowserRouter>
      <Formpages/>
    </BrowserRouter>
    </>
  );
}

export default App;
