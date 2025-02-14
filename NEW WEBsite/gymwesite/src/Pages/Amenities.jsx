import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../Images/Img1.jpeg";
import Img2 from "../Images/Img2.jpeg";
import Img3 from "../Images/Img3.jpeg";
import Img4 from "../Images/Img4.jpeg";
import Img5 from "../Images/Img5.jpeg";
import Img6 from "../Images/Img6.jpeg";
import Img7 from "../Images/Img7.jpeg";
import Img8 from "../Images/Img8.jpeg";
import Img9 from "../Images/Img9.jpeg";
// import Img10 from "../Images/Img10.jpeg";

const Amenities = () => {
    return (
        <div className="container">
            <div className="row">
                <h6 className="text-center mt-5">Training Area</h6>
                <h2 className="text-center mb-5 fw-bold">Amenities & Equipment</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src={Img1}
                                className="d-block w-100"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Slide Image"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                src={Img2}
                                className="d-block w-100"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Slide Image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={Img3}
                                className="d-block w-100"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Slide Image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={Img4}
                                className="d-block w-100"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Slide Image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={Img5}
                                className="d-block w-100"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Slide Image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={Img6}
                                className="d-block w-100"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Slide Image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={Img7}
                                className="d-block w-100"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Slide Image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={Img9}
                                className="d-block w-100"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Slide Image"
                            />
                        </Carousel.Item>
                        {/* <Carousel.Item>
                <img
                    src={Img10}
                    className="d-block w-100"
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                    alt="Slide Image"
                />
            </Carousel.Item> */}
                    </Carousel>
            </div>
        </div>
    )
}

export default Amenities