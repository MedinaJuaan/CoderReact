import CartWidget from "../CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"
import React from "react";
import logo from "../../assets/Images/Misc/logo_full.png";

function NavBar() {
  return (
    <Navbar className="navbar-containter">
      <Container>
      <Navbar.Brand>
          <Link to="/" style={{ cursor: "pointer" }} className="nav-link">
           <img src={logo} alt="Logo" width={'135px'}/>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to={"/category/cctv"} className="navbarlinks">
              Cctv
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/category/alarma"} className="navbarlinks">
              Alarma
            </Link>
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}
export default NavBar;
