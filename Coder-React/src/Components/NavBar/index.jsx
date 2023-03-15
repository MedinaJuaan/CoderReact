import CartWidget from "../CartWidget";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/category/cctv">Cctv</Nav.Link>
          <Nav.Link href="/category/alarma">Alarma</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}
export default NavBar;
