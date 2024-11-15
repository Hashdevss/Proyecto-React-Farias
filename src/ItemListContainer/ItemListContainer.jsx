import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import carneDeRes from '../assets/images/carnevacuna.webp';  // vaca - res
import pollo from '../assets/images/pollo.webp';  // pollo
import cerdo from '../assets/images/cerdo.webp';  // cerdo 
import { productsData } from '../mocks/mockData'; // no se 

const products = [
  { id: 1, name: 'Carne de Res', price: 1200, image: carneDeRes },
  { id: 2, name: 'Pollo', price: 800, image: pollo },
  { id: 3, name: 'Cerdo', price: 900, image: cerdo },
];

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1>{greeting}</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <Link to={`/item/${product.id}`}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="card-img-top" 
                  style={{ maxHeight: '150px', objectFit: 'scale-down' }} 
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
