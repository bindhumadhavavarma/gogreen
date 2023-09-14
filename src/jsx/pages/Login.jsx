import React, { useContext, useState } from 'react'
import pic1 from "../img/login.jpg"
import { Link } from "react-router-dom"
import { ScaleLoader } from 'react-spinners';
import { pushNotify } from '../components/pushNotify';
import {UserContext} from '../../context/UserContext'

function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ username: "", password: "" })
	const { loginUser,loggedInCheck } = useContext(UserContext)

  const Login = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(formData);
    if (!Object.values(formData).every(val => val.trim() !== '')) {
      pushNotify('error', 'Error', 'Please Fill in all Required Fields! in');
      setIsLoading(false);
      return;
    }
    else {
      const data = await loginUser(formData);
      console.log(data);
      if (data.Success) {
        e.target.reset();
        await loggedInCheck();
      }
      else pushNotify('error', 'Error', data.message);
    }
    setIsLoading(false)
  }

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
            <div className="col-lg-6 quote-text py-5 wow fadeIn d-flex align-items-center justify-content-center" data-wow-delay="0.5s">
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">GoGreen Impact Calculator</h6>
                <h1 className="mb-4">Login</h1>

                {
                  isLoading ? <ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center", marginTop: "100px" }} /> :
                    <form onSubmit={Login}>
                      <div className=" g-3 col-12">
                        <div className="col-12 col-sm-6">
                          <input type="text" className="form-control border-0" placeholder="Username" name='username' onChange={onChangeInput} style={{ "height": "55px", width: "300px" }} />
                        </div>
                        <div className="col-12 col-sm-6 mt-3">
                          <input type="password" className="form-control border-0" placeholder="Password" name='password' onChange={onChangeInput} style={{ "height": "55px", width: "300px" }} />
                        </div>
                        <div className="col-12 mt-3">
                          Don't have an account? <Link to="/SignUp">Sign Up.</Link>
                        </div>
                        <div className="col-12 mt-3">
                          <button className="btn btn-primary rounded-pill py-3 px-5" style={{ display: "inline" }} type="submit">Login</button>
                        </div>
                      </div>
                    </form>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login 