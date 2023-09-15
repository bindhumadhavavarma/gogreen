import React, { useState } from 'react'
import pic1 from "../img/login.jpg"
import { Link } from "react-router-dom"
import {pushNotify} from "../components/pushNotify"
import { AxiosPost } from '../../context/UserContext'

function SignUp() {
    const [isLoading, setIsLoading] = useState(false)
    const initialFormdata = { Name: "", Email: "", Username: "", Password: "", confpass: "" }
    const [formData, setFormData] = useState(initialFormdata)

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const signupHandler = async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true);
            const data = await AxiosPost('auth/register', formData);
            console.log(data)
            if (data.success) {
                setFormData(initialFormdata)
                pushNotify("success","Success","You have signed up successfully")
            }
            else {
                pushNotify("error", "Error", data.error)
            }
        } catch {
            pushNotify("error", "Error", "Server Error!")
        } finally {
            setIsLoading(false)
        }
    }

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
                                <h1 className="mb-4">Sign Up</h1>
                                <form onSubmit={signupHandler}>
                                    <div className="g-3">
                                        <div className="col-12 col-sm-6 mt-2">
                                            <input type="text" className="form-control border-0" name='Name' onChange={onChangeHandler} value={formData.Name} placeholder="Your Name" style={{ "height": "55px", width: "300px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6 mt-2">
                                            <input type="email" className="form-control border-0" name='Email' onChange={onChangeHandler} value={formData.Email} placeholder="Your Email" style={{ "height": "55px", width: "300px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6 mt-2">
                                            <input type="text" className="form-control border-0" name='Username' onChange={onChangeHandler} value={formData.Username} placeholder="Username" style={{ "height": "55px", width: "300px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6 mt-2">
                                            <input type="text" className="form-control border-0" name='Password' onChange={onChangeHandler} value={formData.Password} placeholder="Password" style={{ "height": "55px", width: "300px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6 mt-2">
                                            <input type="text" className="form-control border-0" name='confpass' onChange={onChangeHandler} value={formData.confpass} placeholder="Confirm Password" style={{ "height": "55px", width: "300px" }} />
                                        </div>
                                        <div className="col-12 mt-3">
                                            Alread have an account? <Link to="/Login">Login</Link>
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