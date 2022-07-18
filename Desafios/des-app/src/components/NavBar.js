import './NavBar.css';
import logo from '../logo-pyc.png'
import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


function NavBar() {
    const categories = [
      {id: 'Identidad', address: '/categoria/Identidad', text: 'Identidad'},
      {id: 'Packaging', address: '/categoria/Packaging', text: 'Packaging'},
      {id: 'Redes', address: '/categoria/Redes', text: 'Redes'},
    ]
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><CartWidget/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="link" activeClassName='active' to='/home'>Home</NavLink>
            {
              categories.map((cat) =>{
                return (
                  <NavLink className="link" activeClassName='active' key={cat.id} to={cat.address}>{cat.text}</NavLink>
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav>
    //   <div className="nav-wrapper">
    //     <div className='logo brand-logo center'>
    //       <img src={logo} alt="Logo"/>
    //     </div>
    //     <ul id="nav-mobile" className="right ">
    //       <li><NavLink activeClassName='active' to='/home'>Home</NavLink></li>
    //       {
    //         categories.map((cat) =>{
    //           return(
    //             <li><NavLink activeClassName='active' key={cat.id} to={cat.address}>{cat.text}</NavLink></li>
    //           )
    //         })
    //       }
        
        
    //     </ul>
    //   </div>
    // </nav>
    
    );
  }
  
  export default NavBar;
