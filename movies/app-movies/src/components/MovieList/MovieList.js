import styles from './MovieList.module.css';
import 'materialize-css/dist/css/materialize.min.css'
import ItemMovie from '../ItemMovie/ItemMovie';

function MovieList(props) {
  return (
    <div>

        {/* movies es el array a donde va a llegar la info seria el "array original" */}
        {/* Aca lo que hago es --> tomo la info de movies y de cada movie uso el componente ItemMovie y le digo el title sera de esa movie el title y lo mismo con description. Entonces me crea la cantidad de movie que tenga movies. */}
        {props.movies.map((movie) => (
            <ItemMovie
            // Le paso las props que usamos en ItemMovie movie --> es por cada movie del map . y la propiedad a usar
                title={movie.title}
                description={movie.description}
            />
                
        ))}
    </div>
  )
}

export default MovieList;