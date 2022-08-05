import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../Cart/CartWidget';
import NavLogo from './NavLogo';
import { NavDropdown } from 'react-bootstrap';


function NavBar() {
    const categories = [
      {id: 'Identidad', address: '/categoria/Identidad', text: 'Identidad'},
      {id: 'Packaging', address: '/categoria/Packaging', text: 'Packaging & Papelería'},
      {id: 'Redes', address: '/categoria/Redes', text: 'Redes'},
    ]
    return (
      <>
      <NavLogo></NavLogo>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><CartWidget/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/" >Welcome</Nav.Link>
            <Nav.Link href="/home" >Home</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
            {
              categories.map((cat) =>{
                return (
                  <NavDropdown.Item activeClassName='active' key={cat.id} href={cat.address}>{cat.text}</NavDropdown.Item>
                )
              })
            }
            <NavDropdown.Item href="/services">Ver todo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
    );
  }
  
  export default NavBar;
