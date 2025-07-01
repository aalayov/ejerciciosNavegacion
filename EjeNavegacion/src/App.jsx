import { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  /*const [searchParams] = useSearchParams();
  const auth = searchParams.get('auth'); */
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className='nav-link'>Inicio</Link>
              <Link to="/cursos" className='nav-link'>Cursos</Link>
              <Link to="/admin" className='nav-link'>Admin</Link>
              <Link to="/login" className='nav-link'>Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Outlet />
      </Container>
    </>

  )
}

export default App
