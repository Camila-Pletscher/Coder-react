import { useState } from "react";
import CardList from "../CardList/CardList";
import './Container.css'

function Containter(){

    const [cardsFetch, setCardsFetch] = useState([])

    const fetchCards = () => {

        fetch('https://www.breakingbadapi.com/api/characters')
        .then((response) => response.json())
        // guardamos la info en el estado
        .then((data) => setCardsFetch(data))
    }

    return(
        <div className="container">
            <button onClick={fetchCards}>Ver personajes</button>
            {/* le pasamos en cards el estado donde guardamos la info */}
            <CardList cards={cardsFetch} />
        </div>
    )
}

export default Containter;