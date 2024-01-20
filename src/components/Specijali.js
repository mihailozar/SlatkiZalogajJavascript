import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from "../assets/logo.png"
import torta from "../assets/torta.png"
import cupcake from "../assets/cupcake.png"
import donats from "../assets/donats.png"
import pamkin from "../assets/pamkin.png"
import { Col, Row } from 'react-bootstrap';

function Specijali({user, onLogout}) {

  const images = [
    {img:cupcake,
    text:"10% Popusta bez šećera cup cakes"},
    {img:donats,
    text:"Kupi 3+1 gratis DoughNuts"},
    {img:pamkin,
    text:"10% popusta Wedding cakes"},
    {img:donats,
    text:"Kupite 12 po ceni 10"}
    // Add more image URLs as needed
  ];

  const testovi=[

  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      
        <div className="gallery-container">
        <h2>Specijali</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Row>
              <div key={index} className="slider-item">
                <Col >
                <img src={image.img} alt={`Image ${index}`} className="slider-image" />
                </Col>
              <Col className="text-container">
              <h2 className="image-text">{image.text}</h2>
              </Col>
            </div>
            </Row>
          ))}
        </Slider>
      </div>
     
    </>
  );
}

export default Specijali;
