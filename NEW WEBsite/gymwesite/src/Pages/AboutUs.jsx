import React from 'react';
import logo1 from '../Images/logo1.png';
import logo2 from '../Images/logo2.png';

const AboutUs = () => {
    return (
        <div className="text-center py-5 bg-black rounded my-5">
            <div className="d-flex flex-row justify-content-evenly align-items-center my-5">
                <div className="col-md-4">
                    <h1 className="fw-bold">Hello, we are Cult Reshape Fitness!</h1>
                    <p className="mt-3">
                        Our mission is to reshape fitness by providing top-notch training programs, 
                        state-of-the-art facilities, and a community-driven approach to health and wellness. 
                        Join us on this journey to a healthier and stronger you!
                    </p>
                </div>
                <div className="col-md-4">
                    <img alt="Cultfit" src={logo1} className="w-20" style={{ height: '20vh', objectFit: 'cover' }} />
                    <img alt="feet" src={logo2} className="w-20" style={{ height: '20vh', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
