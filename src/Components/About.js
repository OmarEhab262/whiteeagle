import React from "react";
import Title from "./Title";
import about from "../Assets/Img/about.svg";
import "../Styles/About.css"; // Import the CSS file

function About() {
  return (
    <>
      <Title name="نبذة عنا" />
      <div className="mainAbout row m-0 p-3 d-flex align-items-center justify-content-center mt-5 ">
        <div className="img col-lg-4 col-md-12 col-sm-12 mb-4">
          <img className="mainImg p-3" src={about} alt="about" />
        </div>
        <div className="info col-lg-8 col-md-12 col-sm-12">
          <ul className="about-title d-flex flex-column p-3">
            <li className="mb-4">
              انطلقت شركة وايت ايجل من مدينة المنصورة لتعانق عنــان السماء فــي
              مجال صناعة وتنظيم المؤتمرات والمعارض وتجهيـز الملتقيات والحفلات
              والمهرجانات.
            </li>
            <li className="mb-4">
              وقد اعتمدت وايت ايجل لتحقيق تميزها على فريق من الخبرات والكفاءات
              الادارية والفنية المتخصصة في تنظيم أكبر المعارض والمؤتمرات
              للوزارات والهيئات والأجهزة الحكومية والمؤسسية.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
