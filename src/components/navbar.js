import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";

import "../navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbarr(event) {
  function handleSubmit(event) {
    console.log("-----");
    // event.preventDefault();
  }

  function handleLogout() {
    localStorage.clear(); 
  }
  // const navigate = useNavigate();

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="bg-body-tertiary navbackground"
    >
      <Container>
        <Navbar.Brand className="navlogo" href="/home">
          <img
            src={".././images/logo3.png"}
            alt="A Group of Ring-tailed Lemurs"
            style={{ width: 95, marginTop: -7 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto buttoncolor">
            <Nav.Link href="/explore" id="explore">
              Explore
            </Nav.Link>
            <Nav.Link href="/features" id="features" >Features</Nav.Link>
            <Nav.Link href="/pricing" id="pricing" onClick={handleSubmit}>
              Pricing
            </Nav.Link>
            {/* <Nav.Link href="#plans" id="plans">Plans</Nav.Link> */}

            <Nav.Link href="/signup" id="register">
              Register
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Wedding Videos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Our Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Photo Gallery
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Blog</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              className="buttoncolor"
              onClick={handleSubmit}
              eventKey={2}
              href="/profile"
              id="profile"
            >
              Profile
            </Nav.Link>
            <NavDropdown className="imagedrop" href="#signin">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#account">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#account">Support</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout} href="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
