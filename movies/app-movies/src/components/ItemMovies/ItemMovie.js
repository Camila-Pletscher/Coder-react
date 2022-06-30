import './ItemMovie.css';
import 'materialize-css/dist/css/materialize.min.css'

function ItemMovie(props) {
  return (
    <div className="row">
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg" />
          <span className="card-title">{props.title}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"></i></a>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default ItemMovie;