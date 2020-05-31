import React from 'react';

import './styles.css';

function Topbar({ quantity }) {
  return (
    <header className="topbar">
      <h3>Disk Covid-19</h3>

      <div className="classification">
        <button>
          Suspeitos
        </button>
        <button>
          Confirmados
        </button>
        <button>
          Descartados
        </button>
      </div>

      <div className="quantity">
        <h4>Total de respostas: {quantity}</h4>
      </div>
    </header>
  );
}

export default Topbar;