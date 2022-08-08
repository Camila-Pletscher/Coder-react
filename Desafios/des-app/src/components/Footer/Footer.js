import styles from "./Footer.module.css";

import ig from "../../logo-ig.png";
import beh from "../../logo-beh.png";
import wpp from "../../logo-wpp.png";

import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.foot}>
      <div>
        <a href="https://www.instagram.com/designpyc/">
          <img src={ig} alt="Instagram" />
        </a>
      </div>
      <div>
        <a href="https://www.behance.net/pycdesign?tracking_source=search_users%7Cpyc">
          <img src={beh} alt="Behance" />
        </a>
      </div>
      <div>
        <a href="https://wa.me/5491168775055?text=¡Estoy+interesado!">
          <img src={wpp} alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
