import React from 'react';
import { Link } from 'react-router-dom';

import ChocoNugat from "../assets/torte/choco-i-nugat.jpeg"
import CokoladnaTorta1 from "../assets/torte/choco-i-nugat.jpeg"
import CokoladnaTorta2 from "../assets/torte/Cokoladna-torta-2.jpeg"
import CokoladnaTorta3 from "../assets/torte/cokoladna-torta.webp"
import Delfina from "../assets/torte/delfina-iacubl.jpeg"
import Torta from "../assets/torte/torta.jpeg"
import Detalji from "./Detalji.js"
const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Choco nugat',
      imageUrl: ChocoNugat,
      linkTo: "../assets/torte/choco-i-nugat.jpeg", // Link to the component for Product 1
    },
    {
      id: 2,
      name: 'Cokoladna torta1',
      imageUrl: CokoladnaTorta1,
      linkTo: "../assets/torte/choco-i-nugat.jpeg", // Link to the component for Product 2
    },
    {
        id: 3,
        name: 'Cokoladna torta2',
        imageUrl: CokoladnaTorta2,
        linkTo: "../assets/torte/Cokoladna-torta-2.jpeg", // Link to the component for Product 2
      },
      {
        id: 4,
        name: 'Cokoladna torta3',
        imageUrl: CokoladnaTorta3,
        linkTo: "../assets/torte/cokoladna-torta.webp", // Link to the component for Product 2
      },
      {
        id: 5,
        name: 'Delfina',
        imageUrl: Delfina,
        linkTo: "../assets/torte/delfina-iacubl.jpeg", // Link to the component for Product 2
      },
      {
        id: 6,
        name: 'Torta',
        imageUrl: Torta,
        linkTo: "../assets/torte/torta.jpeg", // Link to the component for Product 2
      },
    // Add more products with unique IDs, names, image URLs, and respective links
  ];

  return (
    <div className="gallery-container">
      <h2>Torte</h2>
      <div className="image-grid">
        {products.map((image) => (
          <Link key={image.id} to={`/detalji/${image.id}`} className="image-link2" style={{color:"white"}}>
            <img src={image.imageUrl} alt={`Image ${image.id}`} className="grid-image2" />
            <h3 className="product-name">{image.name}</h3>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
