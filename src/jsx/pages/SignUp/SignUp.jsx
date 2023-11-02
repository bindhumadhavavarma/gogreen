import React, { useState } from 'react'
import { pushNotify } from "../../components/pushNotify"
import { AxiosPost } from '../../../context/UserContext'
import pic from "../../../assets/images/svg-graphics/signup-g.svg"
import { Link } from 'react-router-dom/cjs/react-router-dom'

function SignUp() {
    const [isLoading, setIsLoading] = useState(false)
    const initialFormdata = { firstname: "", lastname: "", username: "", password: ""}
    const [formData, setFormData] = useState(initialFormdata)

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const signupHandler = async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true);
            const data = await AxiosPost('signup.php', formData);
            console.log(data)
            if (data.success) {
                setFormData(initialFormdata)
                pushNotify("success", "Success", "You have signed up successfully")
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
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                        <img src={pic} alt="" class="img-fluid" />
                    </div>
                    <div class="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                        <div class="mb-lg-9 mb-5">
                            <h1 class="mb-1 h2 fw-bold">Get Start Shopping</h1>
                            <p>Welcome to FreshCart! Enter your email to get started.</p>
                        </div>
                        <form onSubmit={signupHandler}>
                            <div class="row g-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" value={formData.firstname} name='firstname' onChange={onChangeHandler}
                                        required />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" value={formData.lastname} name='lastname' onChange={onChangeHandler}
                                        required />
                                </div>
                                <div class="col-12">

                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Username" value={formData.username} name='username' onChange={onChangeHandler} required />
                                </div>
                                <div class="col-12">

                                    <div class="password-field position-relative">
                                        <input type="password" id="fakePassword" placeholder="Enter Password" value={formData.password} name='password' onChange={onChangeHandler} class="form-control" required />
                                        <span><i id="passwordToggler" class="bi bi-eye-slash"></i></span>
                                    </div>
                                </div>
                                <div className='mb-1'>Already have an Account? <Link to="/login">Login</Link></div>
                                <div class="col-12 d-grid"> <button type="submit" class="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp