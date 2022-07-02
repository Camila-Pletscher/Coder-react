import "materialize-css/dist/css/materialize.min.css";

function ItemDetail(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m7">
          <div className="card deep-purple lighten-3">
            <div className="card-image">
              <img src={props.img} alt="img" />
              <span className="card-title">{props.product}</span>
            </div>
            <div className="card-content">
              <p>Precio: ${props.price}</p>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
