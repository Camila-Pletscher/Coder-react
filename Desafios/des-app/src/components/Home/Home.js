import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.contenedor}>
      <div>
        <div className={styles.contBanner}>
          <img src="https://i.postimg.cc/BvSvhryg/banner.jpg" alt="" />
        </div>
        <div className={styles.contInfo}>
          <div className={styles.contBienvenida}>
            <p>Bienvenidx a Design Pyc!</p>
          </div>
          <div className={styles.contEstudio}>
            <p>Estudio de diseño y branding</p>
          </div>
          <div className={styles.contDelega}>
            <p>Delegá para crecer</p>
          </div>
        </div>
        <div className={styles.contIntro}>
          <div className={styles.contIntroImg}>
            <div className={styles.contImage}>
              <img src="https://i.postimg.cc/XJMfmVQZ/fotonuestra.png" alt="" />
            </div>
          </div>
          <div className={styles.contDescripcion}>
            <p>
              Somos DOS partes <b>indispensables</b> de un gran complemento. Es
              por eso que reafirmamos con mucho <b>entusiasmo</b> que las
              fortalezas están en nuestras DIFERENCIAS y no en nuestras
              SIMILITUDES. <br />
              <br />
              El <i>camino recorrido</i> lleno de desafíos que inició en la
              Universidad nos encuentra en este nueva etapa dandole inicio a
              este proyecto llamado <b>Design PYC</b> que busca tanto nuestro
              crecimiento profesional como personal. <br />
              <br /> La organización, la imaginación, la intuición y la empatía
              son los puntos que nos caracterizan y nos distinguen como equipo.{" "}
              <br />
              <br /> Juntas nos complementamos para poder brindar el mejor
              servicio porque las fortalezas están en nuestras diferencias y no
              en nuestras similitudes.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.contElegirnos}>
        <div className={styles.contTitulo}>
          <p>¿Por qué elegirnos?</p>
        </div>
        <div className={styles.contTxt}>
          <p>
            Creemos fuertemente que cualquier proyecto que se emprenda con
            <b> convicción y compañerismo</b> tiene un plus muy especial. <br />
            <br /> Nos distinguimos por nuestra{" "}
            <i> organización, imaginación, intuición y empatía</i>. Siempre
            estamos dispuestas a ayudarlxs porque nos apasiona encontrar las
            soluciones a través de lo que tanto amamos, el diseño y la
            comunicación. <br />
            <br /> Somos dos partes indispensables de un
            <b> gran complemento</b>. Es por eso que reafirmamos con mucho
            entusiasmo que las fortalezas están en nuestras diferencias y no en
            nuestras similitudes. <br />
            <br /> Esperamos que puedan acompañarnos en este nuevo camino y que
            lo disfruten tanto como nosotras. <b> LXS ESPERAMOS!</b>
          </p>
        </div>
        <div className={styles.contContacto}>
          <Link to="/consultas">
          <button>
            <div>
              <i class="material-icons">message</i>
            </div>
            <div>Contactanos</div>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
