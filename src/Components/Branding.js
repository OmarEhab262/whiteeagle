// Branding.js

import React, { useEffect, useRef } from "react";
import "../Styles/Branding.css";

const Branding = () => {
  const HOURHAND = useRef(null);
  const MINUTEHAND = useRef(null);
  const SECONDHAND = useRef(null);

  useEffect(() => {
    function runtheclock() {
      var date = new Date();
      let hr = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();

      let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
      let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
      let secPosition = (sec * 360) / 60;

      if (HOURHAND.current && MINUTEHAND.current && SECONDHAND.current) {
        HOURHAND.current.style.transform = "rotate(" + hrPosition + "deg)";
        MINUTEHAND.current.style.transform = "rotate(" + minPosition + "deg)";
        SECONDHAND.current.style.transform = "rotate(" + secPosition + "deg)";
      }
    }

    runtheclock();

    const interval = setInterval(runtheclock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-image">
      <svg
        id="clock"
        xmlns="http://www.w3.org/2000/svg"
        width="600"
        height="600"
        viewBox="0 0 600 600"
      >
        <g id="face">
          {/* Modify the circle for a dotted effect */}
          <circle
            className="circle"
            cx="300"
            cy="300"
            r="253.9"
            fill="transparent"
            stroke="#ffffff"
            strokeWidth="4"
            strokeDasharray="9 20" // Adjust the dash and gap lengths as needed
          />
          {Array.from({ length: 12 }).map((_, index) => (
            <line
              key={index}
              className="hour-marks"
              x1="300"
              y1="94"
              x2="300"
              y2="61"
              transform={`rotate(${(index * 360) / 12} 300 300)`}
            />
          ))}
          <circle className="mid-circle" cx="300" cy="300" r="16.2" />
          <text
            x="300"
            y="280"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="100"
            fontWeight="bold"
            fill="#ffffff"
          >
            COMING
          </text>
          <text
            x="300"
            y="390"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="100"
            fontWeight="bold"
            fill="#ffffff"
          >
            SOON
          </text>
        </g>
        <g id="hour" ref={HOURHAND}>
          <path className="hour-arm" d="M300.5 298V142" />
          <circle className="sizing-box" cx="300" cy="300" r="253.9" />
        </g>
        <g id="minute" ref={MINUTEHAND}>
          <path className="minute-arm" d="M300.5 298V67" />
          <circle className="sizing-box" cx="300" cy="300" r="253.9" />
        </g>
        <g id="second" ref={SECONDHAND}>
          <path className="second-arm" d="M300.5 350V55" />
          <circle className="sizing-box" cx="300" cy="300" r="253.9" />
        </g>
      </svg>
    </div>
  );
};

export default Branding;
