import React from 'react'
import Card from "react-bootstrap/Card";
import videocard1 from "../Images/videocard1.jpg";
import videocard2 from "../Images/videocard2.jpg";
import videocard3 from "../Images/videocard3.jpg";
import videocard4 from "../Images/videocard4.jpg";


const Testimonials = () => {
  return (
    <div className="container bg-black rounded my-5">
      <div className="row">
        <h3 className="text-center mt-5 text-white">Testimonials</h3>
        <h1 className="text-center mb-5 fw-bold text-white">Our Happy Members</h1>

        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={videocard1} />
            <Card.Body>
              <Card.Title>Anywhere Access</Card.Title>
              <Card.Text>
                Get access to any cult pro gyms all across Mumbai.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={videocard2} />
            <Card.Body>
              <Card.Title>Pause Period</Card.Title>
              <Card.Text>
                Out of town? No worries, pause the membership anytime.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={videocard3} />
            <Card.Body>
              <Card.Title>Extension</Card.Title>
              <Card.Text>
                Get 3 months extension and enjoy 15 months of membership.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={videocard4} />
            <Card.Body>
              <Card.Title>Extension</Card.Title>
              <Card.Text>
                Get 3 months extension and enjoy 15 months of membership.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>

  )
}

export default Testimonials