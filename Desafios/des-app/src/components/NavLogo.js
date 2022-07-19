import styles from './NavLogo.module.css'
import logo from '../logo-pyc.png'

function NavLogo() {
    return(
        <div className={styles.contLogo}>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default NavLogo;