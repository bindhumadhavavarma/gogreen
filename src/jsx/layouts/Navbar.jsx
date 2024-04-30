import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../../context/UserContext"

function Navbar() {
    const { user, logout } = useContext(UserContext)

    const scrollTo = (elementId) => {
        var element = document.getElementById(elementId);
        element.scrollIntoView();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-0 fixed-top">
                <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><span style={{ color: "#ED1C24" }}>Go</span><span style={{ color: "#FFD500" }}>Green</span></h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/#" className="nav-item nav-link">Home</a>
                        <a href="/#about" className="nav-item nav-link" onClick={() => { scrollTo("about") }}>About</a>
                        <a href="/#contact" className="nav-item nav-link" onClick={() => { scrollTo("team") }}>Team</a>
                        <Link to="/dashboard" className="nav-item nav-link" >Dashboard</Link>
                    </div>
                    {
                        user != null ? <a className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" href="#" onClick={logout}>Logout</a> :
                            <Link className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" to="/Login">Login</Link>
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar