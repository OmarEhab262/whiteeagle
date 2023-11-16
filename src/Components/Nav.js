import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../Assets/Img/logo.svg";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/home") {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section.id);
          }
        });
        const scrolledToBottom =
          window.innerHeight + window.scrollY >= document.body.offsetHeight;
        if (scrolledToBottom) {
          setActiveSection("Connect");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    const targetSection = location.hash.slice(1); // Remove '#' from hash
    if (targetSection) {
      const section = document.getElementById(targetSection);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  const handleNavLinkClick = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
      navigate(`/#${section}`); // Update the URL with the section ID
    }
  };
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg fixed-top"
      style={{
        background: "#041461",
      }}
    >
      <div className="container">
        <img src={logo} alt="Logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-dark" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li
              className={`nav-item ${
                activeSection === "Connect" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link"
                onClick={() => handleNavLinkClick("Connect")}
                to="#Connect"
              >
                تواصل معنا
              </Link>
            </li>
            <li
              className={`nav-item ${activeSection === "We" ? "active" : ""}`}
            >
              <Link
                className="nav-link"
                onClick={() => handleNavLinkClick("We")}
                to="#We"
              >
                لماذا نحن
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeSection === "Services" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link"
                onClick={() => handleNavLinkClick("Services")}
                to="#Services"
              >
                خدماتنا
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeSection === "About" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link"
                onClick={() => handleNavLinkClick("About")}
                to="#About"
              >
                نبذة عنا
              </Link>
            </li>
            <li
              className={`nav-item ${activeSection === "Home" ? "active" : ""}`}
            >
              <Link
                className="nav-link"
                onClick={() => handleNavLinkClick("Home")}
                to="#Home"
              >
                الرئيسية
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
