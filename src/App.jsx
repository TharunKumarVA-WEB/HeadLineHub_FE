

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import Home from "./component/Home/Home";
import English from "./component/English/English";
import Tamil from "./component/Tamil/Tamil";
import Kannada from "./component/Kannada/Kannada";
import Telugu from "./component/Telugu/Telugu";


function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Router>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          width: "100vw",
          background: "linear-gradient(to bottom, rgb(114, 116, 230), #b3a1d9)",
          overflow: "hidden",
        }}
      >
        {/* Navigation Bar */}
        <Navbar
      expand="lg"
      className="container fixed-top"
      style={{
        backgroundColor: isScrolled ? "rgb(114, 116, 230)" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
          <div className="row align-items-center justify-content-between w-100">
            {/* HeadlineHub */}
            <div className="col-6 p-1 h1 m-2 text-center text-md-left">
              <Link to="/" style={{
            textDecoration: "none",
            color: isScrolled ? "black" : "white", // Change text color based on scroll
            transition: "color 0.3s ease",
          }}>
                HeadlineHub
              </Link>
            </div>

            {/* Desktop Navigation (Hidden in Mobile) */}
            <div className="col d-none d-lg-block">
              <div className="row justify-content-between align-items-center">
                <Nav className="d-flex">
                  <Nav.Item className="border p-2 h5 text-danger mx-2" style={{ borderRadius: "14px" }}>
                    <Link to="/english" style={{ textDecoration: "none", color: "red" }}>
                      English
                    </Link>
                  </Nav.Item>

                  <Nav.Item className="border p-2 h5 mx-2" style={{ borderRadius: "14px", color: "#800000" }}>
                    <Link to="/tamil" style={{ textDecoration: "none", color: "#800000" }}>
                      Tamil
                    </Link>
                  </Nav.Item>

                  <Nav.Item className="border p-2 h5 text-warning mx-2" style={{ borderRadius: "14px" }}>
                    <Link to="/kannada" style={{ textDecoration: "none", color: "gold" }}>
                      Kannada
                    </Link>
                  </Nav.Item>

                  <Nav.Item className="border p-2 h5 mx-2" style={{ borderRadius: "14px", color: "#00FF7F" }}>
                    <Link to="/telugu" style={{ textDecoration: "none", color: "#00FF7F" }}>
                      Telugu
                    </Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            {/* Mobile Navigation (Dropdown with 3-line icon) */}
            <div className="col d-lg-none text-end">
              <FaBars
                size={30}
                color="white"
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ cursor: "pointer" }}
              />
              {showDropdown && (
                <NavDropdown
                  show
                  align="end"
                  className="position-absolute mt-2"
                  style={{ backgroundColor: "#fff", right: "10px", borderRadius: "10px" }}
                >
                  <NavDropdown.Item as={Link} to="/english" style={{ color: "red" }}>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/tamil" style={{ color: "#800000" }}>
                    Tamil
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/kannada" style={{ color: "gold" }}>
                    Kannada
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/telugu" style={{ color: "#00FF7F" }}>
                    Telugu
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </div>
          </div>
        </Navbar>

        {/* Content Rendering Section */}
        <div className="container mt-5 pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/english" element={<English />} />
            <Route path="/tamil" element={<Tamil />} />
            <Route path="/kannada" element={<Kannada />} />
            <Route path="/telugu" element={<Telugu />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
