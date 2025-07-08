//import { useState } from 'react'
import { Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import { ThemeContext, themes } from './context/ThemeContext.jsx';
import { useEffect, useContext } from "react";
import { LanguageContext, useTranslation } from "./context/LanguageContext.jsx";
import MyNavbar from "./MyNavbar.jsx"

import './App.css'

function App() {


  return (
    <>
      <MyNavbar />
      <br />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App
