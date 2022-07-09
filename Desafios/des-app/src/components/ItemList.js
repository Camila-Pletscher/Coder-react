
import './ItemList.css';
import 'materialize-css/dist/css/materialize.min.css';

import Item from './Item';


function ItemList({items} ) {
    console.log(items)

    
    return (
        <div className='container'>
            {items?.map ((item) => (
                <Item 
                    {...item} key={item.id}
                />
            ))}
        </div>
        
        
    )
  }
  
  export default ItemList;