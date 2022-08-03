import "materialize-css/dist/css/materialize.min.css";
import Detail from "./Detail";
import './ItemDetail.css';



function ItemDetail({services}) {
  return (
    <>
      {services?.map ((service) => (
                <Detail 
                    {...service} key={service.id}
                />
            ))}
    </>
  );
}

export default ItemDetail;
