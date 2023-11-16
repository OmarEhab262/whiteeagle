import React, { useState, useEffect } from "react";
import logo from "../Assets/Img/logo.svg";
import { Link } from "react-router-dom";
import "../Styles/MainPage.css";

import w1 from "../Assets/Img/w1.jpg";
import w2 from "../Assets/Img/w2.jpg";
import w4 from "../Assets/Img/w4.jpg";
import w5 from "../Assets/Img/w5.jpg";
import w6 from "../Assets/Img/w6.jpg";
import w7 from "../Assets/Img/w7.jpg";
import w8 from "../Assets/Img/w8.jpg";

const imageArray = [w1, w2, w4, w5, w6, w7, w8];

const MainPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 2500); // Change image every 2.5 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array, so this effect will run only once when the component mounts

  const currentImage = imageArray[currentImageIndex];

  return (
    <div className="transition-container">
      <div className="main-container">
        <img src={logo} alt="Logo" className="logo" />
        <div
          className="background-image"
          style={{ background: `url(${currentImage}) center/cover` }}
        ></div>
        <div className="info-container">
          <div className="card-container">
            <Link to="/branding" className="link-style">
              <img src={logo} alt="logo" className="card-image" />
              <p className="card-text">BRANDING</p>
            </Link>
          </div>
          <div className="card-container">
            <Link to="/home" className="link-style">
              <img src={logo} alt="logo" className="card-image" />
              <p className="card-text">EVENT</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
