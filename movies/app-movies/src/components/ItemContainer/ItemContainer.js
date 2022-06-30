import './ItemContainer.css';
import 'materialize-css/dist/css/materialize.min.css'
import { useState } from 'react';
import ItemListMovie from '../ItemListMovies/ItemListMovies';

function ItemContainer() {

    const [moviesFetch, setMoviesFetch] = useState([])

    


    const fetchMovies = () => {
        fetch('https://swapi.dev/api/films')
	    .then((response) => {return response.json()})
	    .then(response => console.log(response))
	    .then((data) => setMoviesFetch(data.results))
    }

  return (
    <div>
        <button onClick={fetchMovies}>Ver Peliculas</button>
        <ItemListMovie movies={moviesFetch} />

    </div>
  );
}

export default ItemContainer;