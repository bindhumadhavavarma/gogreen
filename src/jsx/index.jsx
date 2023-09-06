import React, { useContext, useEffect } from "react";

/// React router dom
import { Switch, Route } from "react-router-dom";

/// Css
import "./css/bootstrap.min.css"
import "./css/style.css"
import "./index.css";

/// Layout
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Departments from "./components/Departments/Departments";
const Markup = () => {
    const routes = [
        { url: "", component: Home },
        { url: "login", component: Login },
    ]

    return (
        <>
            <Nav />
            <div className="content-body">
                <div className="container-fluid">
                    <Switch>
                        {routes.map((data, i) => (
                            <Route
                                key={i}
                                exact
                                path={`/${data.url}`}
                                component={data.component}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Markup;
