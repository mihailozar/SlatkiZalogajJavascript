import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Import your CartContext
import "../App.css"
import cake from "../assets/kategorije/cake.png"
import cofe from "../assets/kategorije/cofe.png"


function Korpa({user, onLogout}) {

  const images = [
    {
      id: 1,
      imageUrl: cake,
      name:"Torta", // Link to the component for Image 1
      price:"10",
    },
    {
      id: 2,
      imageUrl: cofe,
      name: "Kafa", // Link to the component for Image 2
      price:"12",
    }
  ]
  const { cartItems } = useCart();
  const cartSize = cartItems.length; // Get the size of cartItems
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <>
      {user ==null?(
        <Navigate to="/login" />
      ):user.username=="user" ? (
         <div >
         <h2 style={{ marginLeft: '10%' }}>Vaša korpa</h2>
         <div className="image-grid" >
           {cartItems.map((item, index) => (
             <div className=" cake-info" key={index}>
               {/* Render your item details here */}
               <img src={item.imageUrl}className="grid-image2"/>
               <p>{item.name}</p>
               <p>{item.price}$</p>
               {/* ... other item details */}
             </div>
           ))}
         </div>
         <br/>
         <div style={{ marginLeft: '10%' }}>
            <h3>Total ({cartSize} proizvoda)</h3>
            <h3>Cena {totalPrice}$</h3>
            <button className="order-button">Naruci</button>
         </div>
       </div>
      ): user.username=="admin"?(
        <div >
         <h2 style={{ marginLeft: '10%' }}>Vaša korpa</h2>
         <div className="image-grid" >
           {images.map((item, index) => (
             <div className=" cake-info" key={index}>
               {/* Render your item details here */}
               <img src={item.imageUrl}className="grid-image2"/>
               <div className="details">
                <p>{item.name}</p>
                <p>Cena {item.price}$</p>
                  {/* ... other item details */}
                </div>
                <div className="buttons">
                  <button  className="action-button">Odobri</button>
                  <button  className="action-button">Odbij</button>
                </div>
             </div>
           ))}
         </div>
         <br/>
         
       </div>
      )
      
      :(
        
        <Navigate to="/login" />
  
      )}
    </>
  );
}

export default Korpa;
