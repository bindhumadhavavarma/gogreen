import React from 'react'
import pic from "../img/login.jpg"

function About() {
    return (
        <div className="container-fluid bg-light overflow-hidden px-lg-0">
            <div className="container about px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ "minHeight": "400px" }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute img-fluid w-100 h-100" src={pic} style={{ "objectFit": "cover" }} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="p-lg-5 pe-lg-0">
                            <h6 className="text-primary">About Project</h6>
                            <p>Welcome to GoGreen, where we're dedicated to a sustainable future powered by renewable energy.</p>
                            <p>
                                At GoGreen, we believe that the choices we make today can have a profound impact on the world of tomorrow. That's why we're passionate about helping you make informed decisions when it comes to your energy consumption.
                            </p>
                            <h6 className="text-primary">Our Mission</h6>
                            <p>
                                Our mission is to empower individuals and businesses to transition to cleaner, more sustainable energy sources. We're committed to reducing carbon footprints and promoting eco-friendly practices.
                            </p>
                            <h6 className="text-primary">Explore Our Tools</h6>
                            <p>
                                Take advantage of our Renewable Energy Calculator to estimate your potential environmental impact reduction and cost savings when you make the switch to renewable energy. Our easy-to-use tool will guide you through the process and provide you with valuable insights.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About