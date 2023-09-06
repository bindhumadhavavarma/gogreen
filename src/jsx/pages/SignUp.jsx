import React from 'react'
import pic1 from "../img/login.jpg"
import {Link} from "react-router-dom"

function SignUp() {
    return (
        <>
            <div className="container-fluid bg-light overflow-hidden px-lg-0">
                <div className="container quote px-lg-0">
                    <div className="row g-0 mx-lg-0" style={{ "minHeight": "100vh" }}>
                        <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ "minHeight": "400px" }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={pic1} style={{ "objectFit": "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 quote-text py-5 wow fadeIn  d-flex align-items-center justify-content-center" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <h6 className="text-primary">GoGreen Impact Calculator</h6>
                                <h1 className="mb-4">Sign Up</h1><form>
                                    <div className="g-3">
                                        <div className="col-12 col-sm-6 mt-2">
                                            <input type="text" className="form-control border-0" placeholder="Your Name" style={{ "height": "55px", width: "300px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6 mt-2">
                                            <input type="email" className="form-control border-0" placeholder="Your Email" style={{ "height": "55px", width: "300px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6 mt-2">
                                            <input type="text" className="form-control border-0" placeholder="Username" style={{ "height": "55px", width: "300px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6 mt-2">
                                            <input type="text" className="form-control border-0" placeholder="Password" style={{ "height": "55px", width: "300px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6 mt-2">
                                            <input type="text" className="form-control border-0" placeholder="Confirm Password" style={{ "height": "55px", width: "300px" }} />
                                        </div>
                                        <div className="col-12 mt-3">
                                            Alread have an account? <Link to="/Login">Login.</Link>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp