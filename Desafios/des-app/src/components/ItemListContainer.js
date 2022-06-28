import './ItemListContainer.css';
import logo from '../assets/images/logo-pyc.png'

import 'materialize-css/dist/css/materialize.min.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList';



function ItemListContainer() {

    

    return (
        <div className='cont-img container-fluid center'>
            <ItemList />
            {/* <ItemCount stock={10} /> */}
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