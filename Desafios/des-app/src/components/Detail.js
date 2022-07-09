
import "materialize-css/dist/css/materialize.min.css";


function Detail({id,nombre,categoria,image,precio}) {
  

  return (
    <div key={id}>
      <span>{nombre}</span>
      <span>Cat: {categoria}</span>
      <span>
        <img src={image} alt={nombre} />
      </span>
      <span>Precio: ${precio}</span>
    </div>
    
  );
}

export default Detail;
