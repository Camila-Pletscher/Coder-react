
import 'materialize-css/dist/css/materialize.min.css'
import ItemMovie from '../ItemMovies/ItemMovie';

function ItemListMovie(props) {
  return (
    <div>
        {props.movies.map((movie) => {
            <ItemMovie 
                title={movie.title}
                year={movie.year} 
            />
        })}

    </div>
  );
}

export default ItemListMovie;