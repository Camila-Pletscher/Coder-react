import styles from "./Welcome.module.css";
import logo from "../../logo-pyc.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={styles.contWelcome}>
      <div className={styles.contLogo}>
        <img src={logo} alt="logo pyc" />
      </div>
      <div className={styles.contDescrip}>
        <p>Estudio de diseño y branding</p>
      </div>
      <div className={styles.contSaludo}>
        <div className={styles.saludo}>¡Hola!</div>
        <div className={styles.frase}>Delegá para crecer</div>
      </div>
      <div className={styles.contLinks}>
        <Link to="/services">
          <div className={styles.links}>
            <p>Servicios</p>
          </div>
        </Link>
        <div className={styles.links}>
          <p>Proyectos</p>
        </div>
        <Link to="/consultas">
        <div className={styles.links}>
          <p>Consultas</p>
        </div>
        </Link>
        <Link to="/home">
          <div className={styles.links}>
            <p>Ver web</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
