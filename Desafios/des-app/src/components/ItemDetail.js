import "materialize-css/dist/css/materialize.min.css";
import './ItemDetail.css';



function ItemDetail(props) {
  return (
    <div className="container cont-detail">
      <div className="row">
        <div className="col s6">
          
          <img src ={props.img} alt={props.product} />
        
        </div>
        <div className="col s6 name">
          <p>{props.product}</p>
          <p>Precio: ${props.price}</p>
        </div>
        <div className="col s12">
          <p className="center">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
