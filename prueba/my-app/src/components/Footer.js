import './Footer.css';
import ig from '../assets/images/logo-ig.png'
import beh from '../assets/images/logo-beh.png'
import wpp from '../assets/images/logo-wpp.png'

import 'materialize-css/dist/css/materialize.min.css';

function Footer() {
    return (
       
         <div className="row cont-foot">
            <div className="col foot">
                <a href=''>
                    <img src={ig} />
                </a>
            </div>
            <div className="col foot">
                <a href=''>
                    <img src={beh} />
                </a>
            </div>
            <div className="col foot">
                <a href=''>
                    <img src={wpp} />
                </a>
            </div>
         </div>
       
    );
  }
  
  export default Footer;