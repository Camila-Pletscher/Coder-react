import './NavBar.css';
import logo from '../logo-pyc.png'
import 'materialize-css/dist/css/materialize.min.css';

import {  NavLink } from 'react-router-dom';


function NavBar() {
    const categories = [
      {id: 'Identidad', address: '/categoria/Identidad', text: 'Identidad'},
      {id: 'Packaging', address: '/categoria/Packaging', text: 'Packaging'},
      {id: 'Redes', address: '/categoria/Redes', text: 'Redes'},
    ]
    return (
      
    <nav>
      <div className="nav-wrapper">
        <div className='logo brand-logo center'>
          <img src={logo} alt="Logo"/>
        </div>
        <ul id="nav-mobile" className="right ">
          <li><NavLink activeClassName='active' to='/home'>Home</NavLink></li>
          {
            categories.map((cat) =>{
              return(
                <li><NavLink activeClassName='active' key={cat.id} to={cat.address}>{cat.text}</NavLink></li>
              )
            })
          }
        
        
        </ul>
      </div>
    </nav>
    );
  }
  
  export default NavBar;
