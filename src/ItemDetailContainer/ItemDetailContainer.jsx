import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import carneDeRes from '../assets/images/carnevacuna.webp';  // 
import pollo from '../assets/images/pollo.webp';  // 
import cerdo from '../assets/images/cerdo.webp';  // 

const products = [
  { id: 1, name: 'Carne de Res', price: 1200, description: 'Deliciosa carne de res', image: carneDeRes },
  { id: 2, name: 'Pollo', price: 800, description: 'Pollo fresco de granja', image: pollo },
  { id: 3, name: 'Cerdo', price: 900, description: 'Carne de cerdo de calidad', image: cerdo },
];

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(itemId));
    setProduct(foundProduct);
  }, [itemId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.image} 
            alt={product.name} 
            className="img-fluid" 
            style={{ maxHeight: '300px', objectFit: 'contain' }} 
          />
        </div>
        <div className="col-md-6">
          <h3>Descripción</h3>
          <p>{product.description}</p>
          <p><strong>Precio: </strong>${product.price}</p>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
