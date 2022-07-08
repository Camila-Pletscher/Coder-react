

function Detail({product,price,img,id,subtitle}) {



  return (
    
      <div className="row" key={id}>
        <div className="col s6">
          <img src={img} alt={product} />
        </div>
        <div className="col s6 name">
          <p>{product}</p>
          <p>Precio: ${price}</p>
        </div>
        <div className="col s12">
          <p className="center">{subtitle}</p>
        </div>
      </div>
    
  );
}

export default Detail;
