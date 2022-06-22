import './ItemListContainer.css';
import logo from '../assets/images/logo-pyc.png'

import 'materialize-css/dist/css/materialize.min.css';


function ItemListContainer() {
    return (
        <div className='cont-img container-fluid center'>
         <div className='row'>
            <div className='col-4 center saludo'>
                <img src={logo} />
                <p>Servicios</p>
                <p>Delegá para crecer</p>
            </div>
         </div>
         <div className='row'>
            <div className='col-4 center'>
                <a href=''>
                    <button>Packs</button>
                </a>
            </div>            
         </div>
         <div className='row'>
            <div className='col-4 center'>
                <a href=''>
                    <button>Identidad Visual</button>
                </a>
            </div>            
         </div>
         <div className='row'>
            <div className='col-4 center'>
                <a href=''>
                    <button>Packaging</button>
                </a>
            </div>            
         </div>
         <div className='row'>
            <div className='col-4 center'>
                <a href=''>
                    <button>Redes</button>
                </a>
            </div>            
         </div>
       </div>
    );
  }
  
  export default ItemListContainer;