import React from 'react'
import pic1 from "../img/carousel-1.jpg"
import pic2 from "../img/carousel-2.jpg"
import pic3 from "../img/carousel-3.jpg"
import {Link} from "react-router-dom"

function Carousel() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} className="d-block w-100 img-responsive" alt="Image 1"/>
                            <div className="carousel-caption d-flex flex-column justify-content-center align-items-start" style={{height:"100%",fontSize:"16px"}}>
                                <h2 className='display-2 text-white animated slideInDown text-start'>Harnessing Renewable Energy</h2>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">Powering the Future with Sustainable Solutions</p>
                                <Link to="/SignUp" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Get started</Link>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} className="d-block w-100" alt="Image 2"/>
                            <div className="carousel-caption d-flex flex-column justify-content-center align-items-start" style={{height:"100%"}}>
                                <h2 className='display-2 text-white animated slideInDown text-start'>Reducing Carbon Footprints</h2>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">Our Commitment to a Greener Planet"</p>
                                <Link to="/SignUp" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Get started</Link>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} className="d-block w-100" alt="Image 3"/>
                            <div className="carousel-caption d-flex flex-column justify-content-center align-items-start" style={{height:"100%"}}>
                                <h2 className='display-2 text-white animated slideInDown text-start'>Join Us in Going Green</h2>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">Making a Difference One Watt at a Time</p>
                                <Link to="/SignUp" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Get started</Link>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </>
    )
}

export default Carousel