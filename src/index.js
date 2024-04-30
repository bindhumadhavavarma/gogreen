import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from "./context/UserContext";
import { ToastContainer } from "react-toastify";
ReactDOM.render(
        <BrowserRouter>
                <UserContextProvider>
                        <ToastContainer/>
                        <App />
                </UserContextProvider>
        </BrowserRouter>,
        document.getElementById("root")
);