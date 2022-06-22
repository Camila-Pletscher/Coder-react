import './NavBar.css';

import 'materialize-css/dist/css/materialize.min.css';
import CartWidget from './CartWidget';


function NavBar() {
    return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">        
          <CartWidget />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Servicios</a></li>
          <li><a href="badges.html">Clientes</a></li>
          <li><a href="collapsible.html">Consultas</a></li>
        </ul>
      </div>
    </nav>
    );
  }
  
  export default NavBar;
