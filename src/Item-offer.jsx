import "./Claners-grid.css";

const Itemoffer = () => {
  return (
    <div className="flex-card">
      <img src="https://s3-us-west-2.amazonaws.com/www.claners.com/uploads/mainpage/images/main_1630267593.jpg" alt="img" className="image" />

      <div className="description-wrapper">
        <div className="description">La Tierra Media: Sombras de Mordor</div>

      {/*<div className="platform-wrapper">
          <div className="platform">
            <img src="/xbox.png" alt="{}" />
          </div>
  </div>*/}  

        <div className="clancoins-wrapper">
          
          <div className="clancoins-card">
            <div className="clancoins-coins">
            <img src="https://www.claners.com/app/templates/default/images/coins_icon.png" alt="cc" className="clancoins-coins-image"/> 
            <div className="clancoins-coins-quantity">
            +5
            <div className="clancoins">
              Clancoins
            </div>
            </div>
            </div>
            
          </div>


        </div>

      </div>

      <div className="container-price">
        
        <div className="buy-button">
          <a href="{}" className="button-cart">
            <span>
              <img src="/cart.png" alt="cart" className="buy-button-cart" />
              Comprar
            </span>
          </a>
        </div>

        <div className="grid-price-wrapper">
          <span className="grid-original-price">$000 MXN</span>
          <span className="price">$2300 </span>
          <span className="mxn">MXN</span>
        </div>
      </div>
    </div>
  );
};

export default Itemoffer;
