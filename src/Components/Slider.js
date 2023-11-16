import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import calender2 from "../Assets/Img/calender2.svg";
import clock from "../Assets/Img/clock.svg";
import tickets from "../Assets/Img/tickets.svg";
import location from "../Assets/Img/location.svg";
import "../Styles/Slider.css";

const PartySlider = () => {
  const [partyItems, setPartyItems] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 700) {
      setSlidesToShow(1);
    } else if (screenWidth <= 1300) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  const handleAfterChange = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/7c95d2ddb52abca94e3c"
        );
        const data = await response.json();
        setPartyItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        className={`custom-dot ${i === currentIndex ? "active-dot" : ""}`}
      ></div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings} afterChange={handleAfterChange}>
        {partyItems.map((item, index) => (
          <div key={index} className="party">
            <div className="img">
              <img src={item.img} alt="event" />
            </div>
            <div className="boxx">
              <div className="line"></div>
              <div className="title ">{item.title}</div>
              <div className="details  mb-3">
                <div className="data mt-4 items">
                  <div className="text">{item.date}</div>
                  <div className="icon">
                    <img src={calender2} alt="calender2" />
                  </div>
                </div>
                <div className="location mt-4 items">
                  <div className="text">{item.location}</div>
                  <div className="icon">
                    <img src={location} alt="location" />
                  </div>
                </div>
                <div className="time mt-4 items">
                  <div className="text">{item.time}</div>
                  <div className="icon">
                    <img src={clock} alt="clock" />
                  </div>
                </div>
                <div className="tickets mt-4 items">
                  <div className="text">{item.tickets}</div>
                  <div className="icon">
                    <img src={tickets} alt="tickets" />
                  </div>
                </div>
              </div>
              <div
                className={`reservation ${
                  item.tickets === "Sold Out" ? "sold-out" : ""
                }`}
                style={{
                  cursor: item.tickets === "Sold Out" ? "default" : "pointer",
                }}
              >
                {item.tickets === "Sold Out"
                  ? "انتهي الحجز"
                  : "احجز مقعدك الان"}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartySlider;
