import styles from './Welcome.module.css';

import logo from '../logo-pyc.png'
import { Link } from 'react-router-dom';
function Welcome() {
    return(
        <div className={styles.contWelcome}>
            <div className={styles.contLogo}>
                <img src={logo} alt='logo pyc'/>
            </div>
            <div className={styles.contSaludo}>
                <div className={styles.saludo}>¡Hola!</div>
                <div className={styles.frase}>Delegá para crecer</div>
            </div>
            <div className={styles.contLinks}>
                <Link to="/services">
                <div className={styles.links}>
                    Servicios
                </div>
                </Link>
                <div className={styles.links}>
                    Proyectos
                </div>
                <div className={styles.links}>
                    Consultas
                </div>
                <Link to="/home">
                <div className={styles.links}>
                    Ver web
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Welcome;