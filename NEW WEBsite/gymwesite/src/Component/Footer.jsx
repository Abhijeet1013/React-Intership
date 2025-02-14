import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white py-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <h5 className="text-yellow">About Us</h5>
                            <p>We are committed to providing the best gym experience with personalized training, nutrition advice, and more.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h5 className="text-yellow">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/Home" className="text-white hover-yellow">Home</Link></li>
                                <li><Link to="/aboutus" className="text-white hover-yellow">About Us</Link></li>
                                <li><Link to="/footer" className="text-white hover-yellow">Footer</Link></li>
                                <li><Link to="/contactus" className="text-white hover-yellow">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h5 className="text-yellow">Contact</h5>
                            <p>Email: info@cultfit.com</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Address: 123 Gym St, Fitness City, FC 12345</p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p>&copy; 2025 cult.fit. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer