import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h2 className="m-0 text-primary"><span style={{color:"#ED1C24"}}>Go</span><span style={{color:"#FFD500"}}>Green</span></h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="contact.html" className="nav-item nav-link">Team</a>
            </div>
            <Link className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" to="/Login">Login</Link>
        </div>
    </nav>
  )
}

export default Nav