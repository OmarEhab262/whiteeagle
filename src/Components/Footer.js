import React from "react";
import twitter from "../Assets/Img/twitter.svg";
import facebook from "../Assets/Img/facebook.svg";
import insat from "../Assets/Img/insat.svg";
import tiktok from "../Assets/Img/tiktok.svg";
import phone from "../Assets/Img/phone.svg";
import massage from "../Assets/Img/massage.svg";

function Footer() {
  return (
    <div className="footer bg-light text-center mt-5 p-3">
      <div className="logoFooter m-5">
        <h2 className="mt-4" style={{ fontSize: "32px", color: "#041461" }}>
          تواصل معنا
        </h2>
      </div>
      <div className="container contact">
        <div className="row">
          <div className="col-md-6 contactLeft d-flex align-items-center justify-content-center">
            <a
              href="mailto:Info@whiteeagles.net"
              style={{ fontSize: "24px", margin: "0 10px" }}
            >
              Info@whiteeagles.net
            </a>
            <img src={massage} alt="massage" style={{ width: "40px" }} />
          </div>
          <div className="col-md-6 contactRight d-flex align-items-center justify-content-center">
            <p style={{ fontSize: "20px", margin: "0 10px" }}>
              01022550799 - 01022550788
            </p>
            <img src={phone} alt="phone" style={{ width: "40px" }} />
          </div>
        </div>
      </div>
      <div className="icon p-3 d-flex align-items-center justify-content-center">
        <a
          href="https://www.facebook.com/whiteEagleEventCompany?mibextid=2JQ9oc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" style={{ width: "48px" }} />
        </a>
        <a
          href="https://twitter.com/whiteeagleevent?s=21&t=h6GFVfWD2OLZQUUlF1QCEA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" style={{ width: "48px" }} />
        </a>
        <a
          href="https://www.tiktok.com/@whiteeagleevent?_t=8ePu5Qcdg0t&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tiktok} alt="tiktok" style={{ width: "48px" }} />
        </a>
        <a
          href="https://www.instagram.com/whiteeagle_event/?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insat} alt="insat" style={{ width: "48px" }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
