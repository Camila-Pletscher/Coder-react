import styles from "./Footer.module.css";
import "materialize-css/dist/css/materialize.min.css";


function Footer() {
  return (
    <div className={styles.foot}>
      <div>
        <a href="https://www.instagram.com/designpyc/">
          <img src="https://i.postimg.cc/xC30cxv1/logo-ig.png" alt="Instagram" />
        </a>
      </div>
      <div>
        <a href="https://www.behance.net/pycdesign?tracking_source=search_users%7Cpyc">
          <img src="https://i.postimg.cc/xC2fjDbZ/logo-beh.png" alt="Behance" />
        </a>
      </div>
      <div>
        <a href="https://wa.me/5491168775055?text=¡Estoy+interesado!">
          <img src="https://i.postimg.cc/Y02tg6Rf/logo-wpp.png" alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
