import styles from './NavLogo.module.css'
import logo from '../../logo-pyc.png'
import { Link } from 'react-router-dom';

function NavLogo() {
    return(
        <div className={styles.contLogo}>
            <Link to="/home">
            <img src={logo} alt="logo"/>
            </Link>
        </div>
    )
}

export default NavLogo;