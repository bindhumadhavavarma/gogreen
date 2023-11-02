import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AxiosPost, UserContext } from "../../context/UserContext"
import logo from "../img/logo.png"
import pic from "../../assets/images/banner/menu-banner.jpg"
import { pushNotify } from '../components/pushNotify'

function Navbar() {
    const { user, logout, setCategoryFilter } = useContext(UserContext)
    const [categories, setCategories] = useState(null)
    const [categoryTree, setCategoryTree] = useState(null)

    const scrollTo = (elementId) => {
        var element = document.getElementById(elementId);
        element.scrollIntoView();
    }

    const fetchCategories = async () => {
        try {
            const data = await AxiosPost('fetch_categories.php')
            if (data.success) {
                setCategories(data.categories)
            }
            else pushNotify("error", "Error", data.error)
        } catch (err) {
            pushNotify("error", "Error", "Server Error!");
            console.log(err)
        }
        finally {
        }
    }

    const fetchCategoryTree = async () => {
        try {
            const data = await AxiosPost('fetch_category_tree.php')
            if (data.success) {
                setCategoryTree(data.categories)
            }
            else pushNotify("error", "Error", data.error)
        } catch (err) {
            pushNotify("error", "Error", "Server Error!");
            console.log(err)
        }
        finally {
        }
    }

    useEffect(() => { fetchCategories(); fetchCategoryTree() }, [])

    return (
        <>
            <div className="border-bottom ">

                <div className="py-4 pt-lg-3 pb-lg-0">
                    <div className="container">
                        <div className="row w-100 align-items-center gx-lg-2 gx-0">
                            <div className="col-xxl-2 col-lg-3">
                                <Link className="navbar-brand d-none d-lg-block" to="/">
                                    <img src={logo} width={100} alt="eCommerce HTML Template" />

                                </Link>
                                <div className="d-flex justify-content-between w-100 d-lg-none">
                                    <Link className="navbar-brand" to="/">
                                        <img src={logo} width={100} alt="eCommerce HTML Template" />

                                    </Link>

                                    <div className="d-flex align-items-center lh-1">

                                        <div className="list-inline me-4">
                                            <div className="list-inline-item">

                                                <a href="#!" className="text-muted" data-bs-toggle="modal" data-bs-target="#userModal">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                        className="feather feather-user">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="list-inline-item">

                                                <a className="text-muted position-relative " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                                    href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                        className="feather feather-shopping-bag">
                                                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                    </svg>
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                                        1
                                                        <span className="visually-hidden">unread messages</span>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>
                                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                                className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                                                <path
                                                    d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </button>

                                    </div>
                                </div>

                            </div>
                            <div className="col-xxl-6 col-lg-5 d-none d-lg-block">

                                <form action="#">
                                    <div className="input-group ">
                                        <input className="form-control rounded" type="search" placeholder="Search for products" />
                                        <span className="input-group-append">
                                            <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-search">
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                </svg>
                                            </button>
                                        </span>
                                    </div>

                                </form>
                            </div>
                            <div className="col-md-4 col-xxl-2 text-end d-none d-lg-block">

                                <div className="list-inline">
                                    <div className="list-inline-item">
                                        {
                                            localStorage.getItem("loginToken") ?
                                                <Link to="account" className="text-muted position-relative">
                                                    <i class="fa fa-user"></i> My Account
                                                </Link> :
                                                <Link to="signup" className="text-muted position-relative">
                                                    <i class="fa fa-user"></i> Login | Signup
                                                </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light navbar-default py-0 py-lg-4 " aria-label="Offcanvas navbar large">
                    <div className="container">


                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbar-default" aria-labelledby="navbar-defaultLabel">
                            <div className="offcanvas-header pb-1">
                                <a href="./index.html"><img src={logo} width={100} alt="eCommerce HTML Template" /></a>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="d-block d-lg-none mb-4">
                                    <form action="#">
                                        <div className="input-group ">
                                            <input className="form-control rounded" type="search" placeholder="Search for products" />
                                            <span className="input-group-append">
                                                <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                        className="feather feather-search">
                                                        <circle cx="11" cy="11" r="8"></circle>
                                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                    </svg>
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                    <div className="mt-2">
                                        <button type="button" className="btn  btn-outline-gray-400 text-muted w-100 " data-bs-toggle="modal"
                                            data-bs-target="#locationModal">
                                            <i className="feather-icon icon-map-pin me-2"></i>Pick Location
                                        </button>
                                    </div>
                                </div>
                                <div className="d-block d-lg-none mb-4">
                                    <a className="btn btn-primary w-100 d-flex justify-content-center align-items-center" data-bs-toggle="collapse"
                                        href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <span className="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-grid">
                                            <rect x="3" y="3" width="7" height="7"></rect>
                                            <rect x="14" y="3" width="7" height="7"></rect>
                                            <rect x="14" y="14" width="7" height="7"></rect>
                                            <rect x="3" y="14" width="7" height="7"></rect>
                                        </svg></span> All Categories
                                    </a>
                                    <div className="collapse mt-2" id="collapseExample">
                                        <div className="card card-body">
                                            <ul className="mb-0 list-unstyled">
                                                {categories == null ? <li><Link className="dropdown-item">Loading...</Link></li> :
                                                    categories.map(category => <li onClick={()=>setCategoryFilter(category.Category_Name)}><Link className="dropdown-item" to="/shop">{category.Category_Name}</Link></li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown me-3 d-none d-lg-block">
                                    <button className="btn btn-primary px-6 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="me-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-grid">
                                                <rect x="3" y="3" width="7" height="7"></rect>
                                                <rect x="14" y="3" width="7" height="7"></rect>
                                                <rect x="14" y="14" width="7" height="7"></rect>
                                                <rect x="3" y="14" width="7" height="7"></rect>
                                            </svg></span> All Categories
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        {categories == null ? <li><Link className="dropdown-item">Loading...</Link></li> :
                                            categories.map(category => <li onClick={()=>setCategoryFilter(category.Category_Name)}><Link className="dropdown-item" to="/shop">{category.Category_Name}</Link></li>)
                                        }
                                    </ul>
                                </div>
                                <div className="">
                                    <ul className="navbar-nav align-items-center ">
                                        <a className="nav-item nav-link" href="/">Home</a>
                                        <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
                                            <Link className="nav-link dropdown-toggle" to="/shop" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Shop Now
                                            </Link>
                                            <div className=" dropdown-menu pb-0">
                                                <div className="row p-2 p-lg-4">
                                                    {
                                                        categoryTree == null ? null :
                                                            categoryTree.map(category => <>
                                                                <div className="col-lg-3 col-6 mb-4 mb-lg-0">
                                                                    <h6 className="text-primary ps-3">{category.Category_Name}</h6>
                                                                    {
                                                                        category.children.map(subcat => <span onClick={()=>setCategoryFilter(subcat.SubcategoryName)}><Link className="dropdown-item" to="/shop">{subcat.SubcategoryName}</Link></span> )
                                                                    }
                                                                </div>
                                                            </>)
                                                    }
                                                    <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                                                        <div className="card border-0">
                                                            <img src={pic} alt="eCommerce HTML Template"
                                                                className="img-fluid" />
                                                            <div className="position-absolute ps-6 mt-8">
                                                                <h5 className=" mb-0 ">Dont miss this <br />offer today.</h5>
                                                                <Link to="/shop" className="btn btn-primary btn-sm mt-3">Shop Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <a className="nav-item nav-link" href="/cart"> Cart</a>
                                        <a className="nav-item nav-link" href="/orders"> Orders</a>
                                        <a className="nav-item nav-link" href="/account"> My Account</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


            </div>
            <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">Sign Up</h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="fullName" placeholder="Enter Your Name" required="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter Email address" required="" />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter Password" required="" />
                                    <small className="form-text">By Signup, you agree to our <a href="#!">Terms of Service</a> & <a
                                        href="#!">Privacy Policy</a></small>
                                </div>

                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </form>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">

                            Already have an account? <a href="#">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <div className="text-start">
                        <h5 id="offcanvasRightLabel" className="mb-0 fs-4">Shop Cart</h5>
                        <small>Location in 382480</small>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    <div className="">

                        <div className="alert alert-danger p-2" role="alert">
                            You’ve got FREE delivery. Start <a href="#!" className="alert-link">checkout now!</a>
                        </div>
                        <ul className="list-group list-group-flush">

                            <li className="list-group-item py-3 ps-0 border-top">

                                <div className="row align-items-center">
                                    <div className="col-3 col-md-2">
                                        <img src="../../assets/images/products/product-img-1.jpg" alt="Ecommerce"
                                            className="img-fluid" /></div>
                                    <div className="col-4 col-md-6 col-lg-5">

                                        <a href="../../pages/shop-single.html" className="text-inherit">
                                            <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                                        </a>
                                        <span><small className="text-muted">.98 / lb</small></span>

                                        <div className="mt-2 small lh-1"> <a href="#!" className="text-decoration-none text-inherit"> <span
                                            className="me-1 align-text-bottom">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-trash-2 text-success">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                </path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg></span><span className="text-muted">Remove</span></a></div>
                                    </div>

                                    <div className="col-3 col-md-3 col-lg-3">


                                        <div className="input-group input-spinner  ">
                                            <input type="button" value="-" className="button-minus  btn  btn-sm " data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity/"
                                                className="quantity-field form-control-sm form-input   " />
                                            <input type="button" value="+" className="button-plus btn btn-sm " data-field="quantity" />
                                        </div>

                                    </div>
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$5.00</span>

                                    </div>
                                </div>

                            </li>

                            <li className="list-group-item py-3 ps-0">

                                <div className="row align-items-center">
                                    <div className="col-3 col-md-2">
                                        <img src="../../assets/images/products/product-img-2.jpg" alt="Ecommerce"
                                            className="img-fluid" /></div>
                                    <div className="col-4 col-md-6 col-lg-5">

                                        <a href="../../pages/shop-single.html" className="text-inherit">
                                            <h6 className="mb-0">NutriChoice Digestive </h6>
                                        </a>
                                        <span><small className="text-muted">250g</small></span>

                                        <div className="mt-2 small lh-1"> <a href="#!" className="text-decoration-none text-inherit"> <span
                                            className="me-1 align-text-bottom">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-trash-2 text-success">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                </path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg></span><span className="text-muted">Remove</span></a></div>
                                    </div>

                                    <div className="col-3 col-md-3 col-lg-3">


                                        <div className="input-group input-spinner  ">
                                            <input type="button" value="-" className="button-minus  btn  btn-sm " data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity/"
                                                className="quantity-field form-control-sm form-input   " />
                                            <input type="button" value="+" className="button-plus btn btn-sm " data-field="quantity" />
                                        </div>
                                    </div>
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold text-danger">$20.00</span>
                                        <div className="text-decoration-line-through text-muted small">$26.00</div>
                                    </div>
                                </div>

                            </li>

                            <li className="list-group-item py-3 ps-0">

                                <div className="row align-items-center">
                                    <div className="col-3 col-md-2">
                                        <img src="../../assets/images/products/product-img-3.jpg" alt="Ecommerce"
                                            className="img-fluid" /></div>
                                    <div className="col-4 col-md-6 col-lg-5">

                                        <a href="../../pages/shop-single.html" className="text-inherit">
                                            <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                                        </a>
                                        <span><small className="text-muted">1 kg</small></span>

                                        <div className="mt-2 small lh-1"> <a href="#!" className="text-decoration-none text-inherit"> <span
                                            className="me-1 align-text-bottom">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-trash-2 text-success">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                </path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg></span><span className="text-muted">Remove</span></a></div>
                                    </div>

                                    <div className="col-3 col-md-3 col-lg-3">


                                        <div className="input-group input-spinner  ">
                                            <input type="button" value="-" className="button-minus  btn  btn-sm " data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity/"
                                                className="quantity-field form-control-sm form-input   " />
                                            <input type="button" value="+" className="button-plus btn btn-sm " data-field="quantity" />
                                        </div>
                                    </div>
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">$20.00</div>
                                    </div>
                                </div>

                            </li>

                            <li className="list-group-item py-3 ps-0">

                                <div className="row align-items-center">
                                    <div className="col-3 col-md-2">
                                        <img src="../../assets/images/products/product-img-4.jpg" alt="Ecommerce"
                                            className="img-fluid" /></div>
                                    <div className="col-4 col-md-6 col-lg-5">

                                        <a href="../../pages/shop-single.html" className="text-inherit">
                                            <h6 className="mb-0">Onion Flavour Potato</h6>
                                        </a>
                                        <span><small className="text-muted">250g</small></span>

                                        <div className="mt-2 small lh-1"> <a href="#!" className="text-decoration-none text-inherit"> <span
                                            className="me-1 align-text-bottom">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-trash-2 text-success">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                </path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg></span><span className="text-muted">Remove</span></a></div>
                                    </div>

                                    <div className="col-3 col-md-3 col-lg-3">


                                        <div className="input-group input-spinner  ">
                                            <input type="button" value="-" className="button-minus  btn  btn-sm " data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity"
                                                className="quantity-field form-control-sm form-input   " />
                                            <input type="button" value="+" className="button-plus btn btn-sm " data-field="quantity" />
                                        </div>
                                    </div>
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">$20.00</div>
                                    </div>
                                </div>

                            </li>
                            <li className="list-group-item py-3 ps-0 border-bottom">
                                <div className="row align-items-center">
                                    <div className="col-3 col-md-2">
                                        <img src="../../assets/images/products/product-img-5.jpg" alt="Ecommerce"
                                            className="img-fluid" /></div>
                                    <div className="col-4 col-md-6 col-lg-5">
                                        <a href="../../pages/shop-single.html" className="text-inherit">
                                            <h6 className="mb-0">Salted Instant Popcorn </h6>
                                        </a>
                                        <span><small className="text-muted">100g</small></span>
                                        <div className="mt-2 small lh-1"> <a href="#!" className="text-decoration-none text-inherit"> <span
                                            className="me-1 align-text-bottom">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-trash-2 text-success">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                </path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg></span><span className="text-muted">Remove</span></a></div>
                                    </div>
                                    <div className="col-3 col-md-3 col-lg-3">
                                        <div className="input-group input-spinner  ">
                                            <input type="button" value="-" className="button-minus  btn  btn-sm " data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity"
                                                className="quantity-field form-control-sm form-input   " />
                                            <input type="button" value="+" className="button-plus btn btn-sm " data-field="quantity" />
                                        </div>
                                    </div>
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">$25.00</div>
                                    </div>
                                </div>

                            </li>

                        </ul>
                        <div className="d-flex justify-content-between mt-4">
                            <a href="#!" className="btn btn-primary">Continue Shopping</a>
                            <a href="#!" className="btn btn-dark">Update Cart</a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="locationModal" tabIndex="-1" aria-labelledby="locationModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-body p-6">
                            <div className="d-flex justify-content-between align-items-start ">
                                <div>
                                    <h5 className="mb-1" id="locationModalLabel">Choose your Delivery Location</h5>
                                    <p className="mb-0 small">Enter your address and we will specify the offer you area. </p>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="my-5">
                                <input type="search" className="form-control" placeholder="Search your area" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6 className="mb-0">Select Location</h6>
                                <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">Clear All</a>


                            </div>
                            <div>
                                <div data-simplebar style={{ "height": "300px" }}>
                                    <div className="list-group list-group-flush">

                                        <a href="#"
                                            className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active">
                                            <span>Alabama</span><span>Min:$20</span></a>
                                        <a href="#"
                                            className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                            <span>Alaska</span><span>Min:$30</span></a>
                                        <a href="#"
                                            className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                            <span>Arizona</span><span>Min:$50</span></a>
                                        <a href="#"
                                            className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                            <span>California</span><span>Min:$29</span></a>
                                        <a href="#"
                                            className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                            <span>Colorado</span><span>Min:$80</span></a>
                                        <a href="#"
                                            className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                            <span>Florida</span><span>Min:$90</span></a>
                                        <a href="#"
                                            className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                            <span>Arizona</span><span>Min:$50</span></a>
                                        <a href="#"
                                            className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                            <span>California</span><span>Min:$29</span></a>
                                        <a href="#"
                                            className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                            <span>Colorado</span><span>Min:$80</span></a>
                                        <a href="#"
                                            className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                            <span>Florida</span><span>Min:$90</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar