import React from 'react'
import mapimg from '../Images/MAP.png'

const Contact = () => {
    return (
        <div className="d-flex flex-row justify-content-evenly container my-5">
            <h2 className="text-center mb-4 text-yellow fw-bold">Contact Us!</h2>
            <div className="row">
                <div className="col-md-15 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-yellow">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-yellow">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label text-yellow">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-warning w-100">Submit</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h1>Where you can find us</h1>
                    <p> Second Foor, 90 Feet Rd, above Swaminarayan Temple, Jaigayatri Co-op Housing Society, Garodia Nagar, Ghatkopar East, Mumbai, Maharashtra 400077</p>
                    <img alt="Map" src={mapimg} className="w-30" style={{ height: '30vh' }} />
                </div>
            </div>
        </div>
    )
}

export default Contact