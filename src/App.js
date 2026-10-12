import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { PreferenciasProvider, usePreferencias } from "./preferencias";

const SkipLink = () => {
  const { t } = usePreferencias();
  return (
    <a className="skip-link" href="#contenido">
      {t.saltarContenido}
    </a>
  );
};

function App() {
  return (
    <PreferenciasProvider>
      <BrowserRouter>
        <ScrollManager />
        <SkipLink />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          {/* Rutas viejas, por si alguien tiene el link guardado */}
          <Route path="/proyectosfull" element={<Navigate to="/proyectos" replace />} />
          <Route path="/contacto" element={<Navigate to={{ pathname: "/", hash: "#contacto" }} replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PreferenciasProvider>
  );
}

export default App;
