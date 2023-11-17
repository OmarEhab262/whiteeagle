import React from "react";
import Title from "./Title";
import s1 from "../Assets/Img/s1.svg";
import s4 from "../Assets/Img/s4.svg";
import s5 from "../Assets/Img/s5.svg";
import "../Styles/Services.css";

function Services() {
  return (
    <>
      <Title name="خدماتنا" />
      <div className=" services container  mt-5 text-light">
        <div className="row d-flex align-items-start justify-content-center  ">
          <div className="col-12 col-md-3 col-lg-3 mb-4  ms-3 me-3">
            <div className="textContent d-flex align-items-center justify-content-center flex-column">
              <img src={s4} alt="s4" />
              <h3 className="mt-3">تنظيم حفلات التخرج</h3>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 mb-4 d-sm-flex justify-content-center  ms-3 me-3">
            <div className="textContent d-flex align-items-center justify-content-center flex-column">
              <img src={s1} alt="s1" />
              <h3 className="mt-3">تنظيم المؤتمرات والمعارض وإدارتها</h3>
            </div>
          </div>
        </div>
        <div className="mainLine"></div>
      </div>
    </>
  );
}

export default Services;
