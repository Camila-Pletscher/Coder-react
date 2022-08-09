import styles from './NavLogo.module.css'
import { Link } from 'react-router-dom';

function NavLogo() {
    return(
        <div className={styles.contLogo}>
            <Link to="/home">
            <img src="https://i.postimg.cc/C5vS4R6y/logo-pyc.png" alt="logo"/>
            </Link>
        </div>
    )
}

export default NavLogo;