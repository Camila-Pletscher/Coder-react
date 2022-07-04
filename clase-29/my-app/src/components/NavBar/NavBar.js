import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <header className='header'>
            <nav>
                <ul>
                    {/* cuando apretemos home vamos a mostrar la ruta /home. El link to se trae desde react y se usa para no recargar la pagina*/}
                    {/* <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/products'>Productos</Link></li> */}
                    {/* NavLink tiene mas propiedades */}
                    <li><NavLink activeClassnName='active' to='/home'>Home</NavLink></li>
                    <li><NavLink activeClassnName='active' to='/products'>Productos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;