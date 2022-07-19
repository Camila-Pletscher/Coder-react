import './NavBar.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import NavLogo from './NavLogo';


function NavBar() {
    const categories = [
      {id: 'Identidad', address: '/categoria/Identidad', text: 'Identidad'},
      {id: 'Packaging', address: '/categoria/Packaging', text: 'Packaging'},
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
            {
              categories.map((cat) =>{
                return (
                  <Nav.Link activeClassName='active' key={cat.id} href={cat.address}>{cat.text}</Nav.Link>
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
    );
  }
  
  export default NavBar;
