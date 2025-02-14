
import React from "react";
import gym from '../Images/gym.jpg'
import FeatursPage from "./FeatursPage";
import Testmonials from "../Pages/Testimonials";
import Amenities from "../Pages/Amenities";
import AboutUs from "../Pages/AboutUs";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className=" position-relative">
          <img alt="Gym WEBSITE" src={gym} className="w-100" style={{ height: '100vh', objectFit: 'cover' }} />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-warning d-flex flex-column justify-content-center vh-100 w-100">
            <h1 className="display-4 fs fw-bold">Book a Free Gym Trial!</h1>
            <p className="lead">Try Before You Commit!</p>
          </div>
        </div>
      </div>
      <div className="containerpx-5">
        <div className="row bg-dark text-white p-4 rounded">
          {/* Left Section */}
          <div className="col-md-6">
            <h2 className="fw-bold">New to gyming?</h2>
            <p>We got you covered with our Fitness Starter Bundle</p>
            <p className="text-secondary">
              First up we take your fitness test, followed by the card planner.
              Next up we back you with the nutrition.
            </p>
            <button className="btn btn-warning fw-bold">START NOW!</button>
          </div>

          {/* Right Section */}
          <div className="col-md-6 border-start border-secondary ps-4">
            <h2 className="fw-bold">Working hours</h2>
            <p>
              <strong>Sunday</strong> <br /> 7:00 AM - 01:00 PM
            </p>
            <p>
              <strong>Monday - Saturday</strong> <br /> 7:00 AM - 10:00 PM
            </p>
          </div>
        </div>
      </div>
      <FeatursPage />
      <Testmonials />
      <Amenities />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home;
