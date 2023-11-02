import React, { useContext, useEffect } from "react";

/// React router dom
import { Switch, Route } from "react-router-dom";


/// Layout
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Shop from "./pages/Shop/Shop";
import SignUp from "./pages/SignUp/SignUp";
import ProductPage from "./pages/ProductPage/ProductPage";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
// import Departments from "./components/Departments/Departments";
const Markup = () => {
    const routes = [
        { url: "", component: Home },
        { url: "login", component: Login },
        { url: "signup", component: SignUp },
        { url: "productpage", component: ProductPage },
        { url: "account", component: Account },
        { url: "cart", component: Cart },
        { url: "orders", component: Orders },
        { url: "shop", component: Shop },
    ]
    return (
        <>
            <Navbar />
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
            <Footer></Footer>
        </>
    );
};

export default Markup;
