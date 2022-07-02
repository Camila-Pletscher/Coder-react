import styles from './ItemContainer.module.css';
import 'materialize-css/dist/css/materialize.min.css'
import MovieList from '../MovieList/MovieList';
import { useState } from 'react';

function ItemContainer() {

    // const moviesMock = [
    //     {
    //         id: 1,
    //         title: "Peli 1",
    //         description: "La primer pelicula"
    //     },

    //     {
    //         id: 2,
    //         title: "Peli 2",
    //         description: "La segunda pelicula"
    //     }
    // ]
    // guardamos en el estado el array completo el estado es setMoviesFetch pero la info se guarda en moviesFetch por eso se lo pasamos al componente
    const [moviesFetch, setMoviesFetch] = useState([])

    const fetchMovies = () => {
        // siempre tiene que tener https://
        fetch('https://swapi.dev/api/films')
        // entonces que vamos a hacer con la info que nos llega? 
        // esta linea siempre para retornar el json
        .then((response) => {return response.json()})
        // Aca nos va a llegar el json entonces vamos a guardar el array de results dentro de un estados con usetate. El setMovisFetch es el estado y el data es toda la info del json por eso ponemos .results para que nos traiga el array de las pelis setMoviesFetch(data.results)) 
        .then((data) => {
            // Aca creamos un nuevo array con la info de la api pero como nosotros la queremos, con nuestros nombres. Con el map lo que hacemos es decirle, por cada peli que traigas (movieData) toma el episode_id y ahora llamalo id y asi con todas. Entonces en MovieList la llamamos con nuestro nombre
            const moviesFetchOwn = data.results.map((movieData) => {
                return {
                      id: movieData.episode_id,
                      title: movieData.title,
                      description: movieData.opening_crawl
                }
            })
            // Aca cambiamos el array por el nuestro. lo que hicimos fue modificarlo antes de mandarlo a el state.
            setMoviesFetch(moviesFetchOwn)}) 
    }



  return (
    <div>
        {/* le paso la props movies que es el nombre que le dimos al array que iba a traer la informacion en el archivo movislist. Donde esta la informacion que debe ir en movies? en MoviesMock por ahora. */}
        {/* <MovieList movies={moviesMock} /> */}
        {/* Con este boton vamos a ejectuar la funcion fetchMovies porque si no la llamamos nunca hace la llamada a la api sino lo tenemos que hacer con useffect para que se ejecute sin dependencias */}
        <button onClick={fetchMovies}>Ver peliculas</button>
        <MovieList movies={moviesFetch} />
    </div>
  );
}

export default ItemContainer;