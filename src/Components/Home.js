import main from "../Assets/Img/mainpage.svg";
import calender from "../Assets/Img/calender.svg";
import "../Styles/Home.css";
import Title from "./Title";
import PartySlider from "./Slider";
import About from "./About";
import Services from "./Services";
import We from "./We";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      console.log("Back or forward button was pressed");
      navigate("/");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return (
    <>
      <section id="Home">
        <div className="home d-flex justify-content-center align-items-center flex-column mt-5">
          <img className="mainImg mt-5" src={main} alt="title" />
          <Title name="الفعاليات" />
          {/* <div className="nextEvent m-4">
            <div className="content mt-2 mb-2">
              <div className="top d-flex justify-content-between align-items-center">
                <p>الايفنت القادم</p>
                <img
                  src={calender}
                  alt="calender"
                />
              </div>
              <div className="center">
                <p className="mt-3 text-center">
                  حفلة تخرج كلية تربية نوعية/جامعة المنصورة
                </p>
              </div>
            </div>
            <div className="bottom d-flex justify-content-around align-items-center me-4 ms-4">
              <div className="second text-center">
                <h3>0</h3>
                <p>ثانية</p>
              </div>
              <div className="minute text-center">
                <h3>7</h3>
                <p>دقيقة</p>
              </div>
              <div className="hour text-center">
                <h3>2</h3>
                <p>ساعة</p>
              </div>
            </div>
          </div> */}
          <PartySlider />
        </div>
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="We">
        <We />
      </section>
      <section id="Connect">
        <Footer />
      </section>
    </>
  );
}

export default Home;
