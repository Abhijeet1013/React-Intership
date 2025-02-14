import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const MainNavbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-dark navbar-dark shadow-sm">
                <Container>
                    <Navbar.Brand href="#home" className="fs-2 fw-bold text-warning">cult.fit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">
                                <Link to="/" className="nav-link text-light px-3">HOME</Link>
                            </Nav.Link>
                            <Nav.Link href="#aboutus">
                                <Link to="/feature" className="nav-link text-light px-3">FEATURS</Link>
                            </Nav.Link>
                            <Nav.Link href="#Testimonials">
                                <Link to="/Testimonials" className="nav-link text-light px-3">TESTIMONIALS</Link>
                            </Nav.Link>
                            <Nav.Link href="#Amenities">
                                <Link to="/Amenities" className="nav-link text-light px-3">AMINITIES</Link>
                            </Nav.Link>
                            <Nav.Link href="#AboutUs">
                                <Link to="/AboutUs" className="nav-link text-light px-3">ABOUT US</Link>
                            </Nav.Link>
                            <Nav.Link href="#contactus">
                                <Link to="/contactus" className="nav-link text-light px-3">CONTACT</Link>
                            </Nav.Link>
                            <Nav.Link href="#contactus">
                                <Link to="/contactus" className="nav-link text-light px-3">TERMS</Link>
                            </Nav.Link>
                            {/* <NavDropdown title="More" id="basic-nav-dropdown" className="nav-link text-light">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default MainNavbar;