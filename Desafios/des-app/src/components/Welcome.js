import styles from './Welcome.module.css';

import logo from '../logo-pyc.png'
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
                <div className={styles.links}>
                    Servicios
                </div>
                <div className={styles.links}>
                    Proyectos
                </div>
                <div className={styles.links}>
                    Consultas
                </div>
                <div className={styles.links}>
                    Ver web
                </div>
                
            </div>
        </div>
    )
}

export default Welcome;