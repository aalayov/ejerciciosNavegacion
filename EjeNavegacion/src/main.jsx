import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


//chequear
import { BrowserRouter, Routes, Route } from "react-router-dom";
//incorporamos bootstrap para el tema
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App.jsx'
import Cursos from "./Cursos.jsx";
import CursoDetalle from "./CursoDetalle.jsx";
import Admin from "./Admin.jsx";
import Login from "./Login.jsx";
import NotFound from "./NotFound.jsx";
import Home from "./Home.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LanguageProvider } from './context/LanguageContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/curso/:id" element={<CursoDetalle />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);



/* Home.jsx
Cursos.jsx
CursoDetalle.jsx
Admin.jsx
Login.jsx
NotFound.jsx

<BrowserRouter>
<Routes>
<Route path=”/ apunta” element={</ElementoJSX>}>
<Route path=”/ apunta” element={</ElementoJSX>}>




*/