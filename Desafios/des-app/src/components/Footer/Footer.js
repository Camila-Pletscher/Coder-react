import styles from './Footer.module.css';

import ig from '../../logo-ig.png'
import beh from '../../logo-beh.png'
import wpp from '../../logo-wpp.png'

import 'materialize-css/dist/css/materialize.min.css';

function Footer() {
    return (
        <div className={styles.foot}>
            <div>
                <img src={ig} alt='Instagram' />
            </div>
            <div>
            <img src={beh} alt='Instagram' />
            </div>
            <div>
            <img src={wpp} alt='Instagram' />
            </div>
        </div>
       
    );
  }
  
  export default Footer;