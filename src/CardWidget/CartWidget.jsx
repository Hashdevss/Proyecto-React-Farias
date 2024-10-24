import React from 'react';
import { CiShoppingCart } from "react-icons/ci"; // Importa el ícono de react-icons

function CartWidget() {
  return (
    <a className="nav-link" href="#">
      <span>5</span> {/* Número de artículos en el carrito */}
      <CiShoppingCart size={24} /> {/* Usa el ícono de carrito */}
      <span className="badge bg-danger">5</span> {/* Badge con el número de artículos */}
    </a>
  );
}

export default CartWidget;
