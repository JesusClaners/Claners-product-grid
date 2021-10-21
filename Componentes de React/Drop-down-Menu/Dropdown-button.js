import React, { useState } from 'react';
import "./Dropdown-Claners.css"

function Dropdownbutton(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="dropdown-container">
        <a href="#" className="dropdown-button" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabindex="-1" onClick={() => setOpen(!open)}>
            <div className="dropdown-button-text">Agregar al carrito</div>
            <div className="dropdown-button-icon"></div>
        </a>
  
        {open && props.children}
      </div>
    );
  }

export default Dropdownbutton;