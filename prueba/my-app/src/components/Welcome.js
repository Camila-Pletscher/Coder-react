import './Welcome.css';
import logo from '../assets/images/logo-pyc.png'
import Footer from './Footer';

import 'materialize-css/dist/css/materialize.min.css';

function Welcome() {
    return (
       <div className='cont-img container-fluid center'>
         <div className='row'>
            <div className='col-4 center saludo'>
                <img src={logo} />
                <p>¡Hola!</p>
                <p>Delegá para crecer</p>
            </div>
         </div>
         <div className='row'>
            <div className='col-4 center'>
                <a href=''>
                    <button>Servicios</button>
                </a>
            </div>            
         </div>
         <div className='row'>
            <div className='col-4 center'>
                <a href=''>
                    <button>Proyectos</button>
                </a>
            </div>            
         </div>
         <div className='row'>
            <div className='col-4 center'>
                <a href=''>
                    <button>Consultas</button>
                </a>
            </div>            
         </div>
         <div className='row'>
            <div className='col-4 center'>
                <a href=''>
                    <button>Ver la web</button>
                </a>
            </div>            
         </div>
         <Footer />
       </div>
    );
  }
  
  export default Welcome;