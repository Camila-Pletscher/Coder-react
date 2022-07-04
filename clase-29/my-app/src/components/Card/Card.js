import { Link } from "react-router-dom";


function Card(props){
    return(
        <div>
            <Link to={`/personajes/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>
                <p>{props.id}</p>

        </div>
    )
}

export default Card;