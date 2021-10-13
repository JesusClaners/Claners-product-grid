import "./Claners-grid.css";

const Itemoffer = () => {
  return (
    <div className="card">
      <img src="" alt="img" className="image" />

      <div className="description-wrapper">
        <div className="description">
          texto
        </div>
            <div className="platform">
              plataforma
            </div>
            <div className="clancoins">
              clancoins
            </div>
      </div>
      
      
      <div className="container-price">
        <button className="buy-button">
            <a href="">Comprar</a></button>
        <div className="price-wrapper">
          <span className="original-price">$000 MXN</span>
          <span className="price">$000 MXN</span>
        </div>
      </div>
    </div>
  );
};

export default Itemoffer;
