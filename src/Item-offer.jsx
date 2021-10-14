import "./Claners-grid.css";

const Itemoffer = () => {
  return (
    <div className="container-offers">


    <div className="card">
      <img src="{}" alt="img" className="image" />

      <div className="description-wrapper">
        <div className="description">
          Description
        </div>
            <div className="platform">
              <img src="{}" alt="{}"/>
            </div>
            <div className="clancoins">
              clancoins
            </div>
      </div>
      
      
      <div className="container-price">
        <button className="buy-button">
          <img src="/cart.png" alt="cart" className="buy-button-cart"/>
            <a href="{}" className="button-cart">Comprar</a></button>
        <div className="price-wrapper">
          <span className="original-price">$000 MXN</span>
          <span className="price">$2300 </span>
          <span className="mxn">MXN</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Itemoffer;
