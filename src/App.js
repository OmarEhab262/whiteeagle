import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import MainPage from "./Components/MainPage";
import Branding from "./Components/Branding";
// import LogIn from "./Components/LogIn";
// import Ticket from "./Components/Ticket";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Nav />
                <Home />
              </>
            }
          />
          <Route path="/" element={<MainPage />} />
          <Route path="/branding" element={<Branding />} />
          {/* 
          <Route path="/login" element={<LogIn />} />
          <Route path="/Ticket" element={<Ticket />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
