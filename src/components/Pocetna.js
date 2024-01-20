import React,{ useState } from 'react';
import Login from './login';
import { Route, Navigate } from 'react-router-dom';
import cake from "../assets/kategorije/cake.png"
import cofe from "../assets/kategorije/cofe.png"
import croasan from "../assets/kategorije/croasan.png"
import donats from "../assets/kategorije/donats (1).png"
import pasty from "../assets/kategorije/pasty.png"
import swissroll from "../assets/kategorije/swissroll.png"
import { Link } from 'react-router-dom';




function Pocetna({ user, onLogout}) {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleSubmit = () => {
    // Create a new product object with the collected information
    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
      imageUrl: productImage,
    };

    // Pass the new product to the parent component's onAddProduct function
    // onAddProduct(newProduct);

    // Clear the form fields after adding the product
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductImage('');
  };
  
  const images = [
    {
      id: 1,
      imageUrl: cake,
      linkTo: '/torte', // Link to the component for Image 1
    },
    {
      id: 2,
      imageUrl: cofe,
      linkTo: '/torte', // Link to the component for Image 2
    },
    {
      id: 3,
      imageUrl: croasan,
      linkTo: '/torte', // Link to the component for Image 2
    },
    {
      id: 4,
      imageUrl: donats,
      linkTo: '/torte', // Link to the component for Image 2
    },
    {
      id: 5,
      imageUrl: pasty,
      linkTo: '/torte', // Link to the component for Image 2
    },
    {
      id: 6,
      imageUrl: swissroll,
      linkTo: '/specijali', // Link to the component for Image 2
    },
    // Add more images with unique IDs and respective links
  ];
  return (
    <>
      { user==null ? (
      
      <Navigate to="/login"/>
      
    ):user.username=="user"? (
      <div className="gallery-container">
      <h2>Kategorije</h2>
      <div className="image-grid">
        {images.map((image) => (
          <Link key={image.id} to={image.linkTo} className="image-link" style={{color:"white"}}>
            <img src={image.imageUrl} alt={`Image ${image.id}`} className="grid-image" />
          </Link>
        ))}
      </div>
    </div>
    
      ) :user.username=="admin" ? (
      
        <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Product Name:</label>
        <input
          type="text"
          className="form-input"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label className="form-label">Product Description:</label>
        <textarea
          className="form-input"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />

        <label className="form-label">Product Price:</label>
        <input
          type="text"
          className="form-input"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />

        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
        
      ): (
      
        <Navigate to="/login"/>
        
      )
      }
    </>
  );
};

export default Pocetna;
