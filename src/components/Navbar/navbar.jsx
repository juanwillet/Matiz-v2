import CartWidget from "../CartWidget/cartwidget"
import logotipo from "./assets/logotipomatiz.png"
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={`/`}>
             <img src={logotipo}
             style={{width:80, marginRight:40}}
             />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Vestimenta" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={`/category/women's clothing`}>Dama</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/category/men's clothing`}>Caballero</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={`/category/jewelery`}>Joyeria</Nav.Link>
              <Nav.Link as={Link} to={`/category/electronics`}>Electronicos</Nav.Link>
              <Nav.Link as={Link}><CartWidget/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
export default NavBar