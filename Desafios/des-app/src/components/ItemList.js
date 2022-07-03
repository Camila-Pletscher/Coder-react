
import './ItemList.css';
import 'materialize-css/dist/css/materialize.min.css';

import Item from './Item';


function ItemList(props ) {
    

    
    return (
        <div className='container'>
            {props.services.map ((service) => (
                <Item 
                    product={service.nombre}
                    price={service.precio}
                    description={service.descripcion}
                    img={service.image}
                />
            ))}
        </div>
        
        
    )
  }
  
  export default ItemList;