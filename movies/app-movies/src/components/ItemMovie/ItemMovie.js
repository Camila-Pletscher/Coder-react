import styles from './ItemMovie.module.css';
import 'materialize-css/dist/css/materialize.min.css'

function ItemMovie(props) {
  return (
        
        <div className="row">
            <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                <img src="" alt='' />
                <span className="card-title black-text">{props.title}</span>
                </div>
                <div className="card-content">
                <p>{props.description}</p>
                </div>
                <div className="card-action">
                {/* <a href="">This is a link</a> */}
                </div>
            </div>
            </div>
        </div>

  )
}

export default ItemMovie;