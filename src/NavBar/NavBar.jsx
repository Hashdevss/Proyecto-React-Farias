import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">El Changuito</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/carniceria">Carnicería</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/almacen">Almacén</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/rotiseria">Rotisería</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
            <Link className="nav-link" to="/cart" style={{ marginLeft: '10px', fontSize: '1.5rem' }}>
              <i className="fas fa-shopping-cart"></i> {/* ícono del carrito */}
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
