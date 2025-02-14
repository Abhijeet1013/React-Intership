import React from 'react'
import card1 from '../Images/card1.png'
import card2 from '../Images/card2.png'
import card3 from '../Images/card3.png'
import Card from "react-bootstrap/Card";

const FeatursPage = () => {
  return (

    <div>
      <div className="container">
        <div className="row">
          <h6 className="text-center mt-5">Get A Perfect Body</h6>
          <h2 className="text-center mb-5 fw-bold">Our Special Features</h2>

          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card1} />
              <Card.Body>
                <Card.Title>Anywhere Access</Card.Title>
                <Card.Text>
                  Get access to any cult pro gyms all across Mumbai.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card2} />
              <Card.Body>
                <Card.Title>Pause Period</Card.Title>
                <Card.Text>
                  Out of town? No worries, pause the membership anytime.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card3} />
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
    </div>
    
    
  )
}

export default FeatursPage