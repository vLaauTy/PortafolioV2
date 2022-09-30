import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProyectosFull from "./components/ProyectosFull/Proyectos";

import Sidebar from "./components/SideBar/Sidebar";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Home/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectosfull" element={<ProyectosFull />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
