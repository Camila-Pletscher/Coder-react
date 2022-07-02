import 'materialize-css/dist/css/materialize.min.css';
import ItemDetail from './ItemDetail';

function ItemDetailContainer( props ) {
    

    
    return (

        
        <div className='container'>
            {props.services.map ((service) => (
                <ItemDetail 
                    product={service.nombre}
                    price={service.precio}
                    description={service.descripcion}
                    img={service.img}
                />
            ))}
        </div>

        
        
        
    );
  }
  
  export default ItemDetailContainer;