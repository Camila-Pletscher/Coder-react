import 'materialize-css/dist/css/materialize.min.css';

function ItemDetail({product, price, description, img} ) {
    

    
    return (

        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={img} alt='img' />
              <span className="card-title">{product}</span>
            </div>
            <div className="card-content">
                <p>Precio: ${price}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
        
        
    );
  }
  
  export default ItemDetail;