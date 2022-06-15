import './NavBar.css';

import 'materialize-css/dist/css/materialize.min.css';

function NavBar() {
    return (
        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">        
        <i className='large material-icons'>Moon</i>
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Remeras</a></li>
        <li><a href="badges.html">Buzos</a></li>
        <li><a href="collapsible.html">Contacto</a></li>
      </ul>
    </div>
  </nav>
    );
  }
  
  export default NavBar;

