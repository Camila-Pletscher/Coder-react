import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail(){

    // con esta linea va a buscar los parametros de la ruta
    const params = useParams()
    const [cardFetch, setCardFetch] = useState([])

    const fetchCard = () => {

        fetch(`https://www.breakingbadapi.com/api/characters/${params.characterId}`)
        .then((response) => response.json())
        // guardamos la info en el estado
        .then((data) => setCardFetch(data))
    }

    useEffect(() => {
        fetchCard()
    }, [ ])

    

    return (
        <>
        {/* Con esta linea decimos, si cardFetch no tiene nada no me muestres nada, cuando la longitud del array sea distinto que 0 ahi mostrame. Sino lo hacemos da undefined y se rompe */}
        {cardFetch.length !== 0 && <h1>Nombre: {cardFetch[0].name}</h1>}
       </>
    )
}

export default Detail;