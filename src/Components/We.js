import w1 from "../Assets/Img/w1.svg";
import w2 from "../Assets/Img/w2.svg";
import w3 from "../Assets/Img/w3.svg";
import Title from "./Title";
function We() {
  return (
    <>
      <Title name="لماذا نحن" />
      <div className="container mt-5 text-light">
        <div className="row d-flex align-items-start justify-content-center ">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="weText d-flex align-items-center  flex-column"
              style={{
                border: "1px solid white",
                borderRadius: "10px",
                padding: "20px 5px",
                height: "364px",
              }}
            >
              <img src={w1} alt="w1" style={{ width: "48px" }} />
              <h3
                className="mt-3"
                style={{ fontSize: "32px", margin: "10px 0 30px 0" }}
              >
                مهمتنا
              </h3>
              <p
                style={{
                  direction: "rtl",
                  fontSize: "20px",
                  lineHeight: "35px",
                  padding: "0 10px 0 0 ",
                }}
              >
                انشاء وتطوير نطاق واسع من الخدمات التنظيمية بشكل احترافى ومتجدد
                وتقديم حلول مبنكرة ومتكاملة لكل عملائنا مبنية علي أسس الجودة
                والابداع
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="weText d-flex align-items-center  flex-column"
              style={{
                border: "1px solid white",
                borderRadius: "10px",
                padding: "20px 5px",
                height: "364px",
              }}
            >
              <img src={w3} alt="w3" style={{ width: "48px" }} />
              <h3
                className="mt-3"
                style={{ fontSize: "32px", margin: "10px 0 30px 0" }}
              >
                رؤيتنا
              </h3>
              <p
                style={{
                  direction: "rtl",
                  fontSize: "19px",
                  lineHeight: "35px",
                  padding: "0 10px 0 0 ",
                }}
              >
                أن نكون الاكثر تميزا وإبداعا وريادة في قيادة وتنظيم المؤتمرات
                والمعارض والحفلات علي المستوي المحلي عبر خدمات وافكار
                مبتكرةومتجددة باحترافية ومهارة عالية
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default We;
