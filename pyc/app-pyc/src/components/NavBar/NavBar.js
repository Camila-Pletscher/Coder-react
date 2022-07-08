import styles from './NavBar.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '/Users/camila.pletscher/Documents/Cami/Coder-react/pyc/app-pyc/src/logo-pyc.png'
import { NavLink } from 'react-router-dom';


function NavBar() {


    const categories = [
      {id:"Identidad", address: '/categoria/Identidad', text: 'Identidad'},
      {id:"Packaging", address: '/categoria/Packaging', text: 'Packaging'},
      {id:"Redes", address: '/categoria/Redes', text: 'Redes'},
    ];

    return (
    <nav>
      <div className="nav-wrapper">
        <div className='brand-logo'>
            <img className={styles.logo} src={logo} alt='logo pyc' />
        </div>
        
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink activeClassName='active' to='/home'>Home</NavLink></li>
          <li><NavLink activeClassName='active' to='/proyects'>Proyectos</NavLink></li>
          <li><NavLink activeClassName='active' to='/services'>Servicios</NavLink></li>
        {
          categories.map((cat) => {
            return (
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