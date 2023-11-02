import React, { useContext, useState } from 'react'
import { pushNotify } from '../../components/pushNotify';
import { UserContext } from '../../../context/UserContext'
import pic from "../../../assets/images/svg-graphics/signin-g.svg"
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({ username: "", password: "" })
    const { loginUser, loggedInCheck } = useContext(UserContext)

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
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                        <img src={pic} alt="" class="img-fluid" />
                    </div>
                    <div class="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                        <div class="mb-lg-9 mb-5">
                            <h1 class="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                            <p>Welcome back to FreshCart! Enter your email to get started.</p>
                        </div>

                        <form onSubmit={Login}>
                            <div class="row g-3">
                                <div class="col-12">
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Username" required value={formData.username} name='username' onChange={onChangeInput}/>
                                </div>
                                <div class="col-12">
                                    <div class="password-field position-relative">
                                        <input type="password" id="fakePassword" placeholder="Enter Password" class="form-control" required value={formData.password} name='password' onChange={onChangeInput}/>
                                        <span><i id="passwordToggler" class="bi bi-eye-slash"></i></span>
                                    </div>

                                </div>
                                <div class="col-12 d-grid"> <button type="submit" class="btn btn-primary">Sign In</button>
                                </div>
                                <div>Don’t have an account? <Link to="signup"> Sign Up</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login 