import { Suspense, useContext, useEffect } from 'react';

/// Componentszcxvzvmmm
import Index from "./jsx";
import { Route, Switch } from 'react-router-dom';
// action
/// Style
import "./main.css";
import { UserContext } from './context/UserContext';
import Home from './jsx/pages/Home/Home';
import Login from './jsx/pages/Login/Login';
import SignUp from './jsx/pages/SignUp/SignUp';
import Shop from './jsx/pages/Shop/Shop';
import Navbar from './jsx/layouts/Navbar';
import Footer from './jsx/layouts/Footer';
import ProductPage from './jsx/pages/ProductPage/ProductPage';
import Account from './jsx/pages/Account/Account';
import Cart from './jsx/pages/Cart/Cart';
import Orders from './jsx/pages/Orders/Orders';



function App() {
    const { user } = useContext(UserContext);
    useEffect(() => {
        console.log((user != null));
        // checkAutoLogin(dispatch, props.history);
    }, []
    );

    let routes = (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/shop' component={Shop} />
            <Route path='/productpage' component={ProductPage} />
            <Route path='/account' component={Login} />
            <Route path='/cart' component={Login} />
            <Route path='/orders' component={Login} />
            <Route path='/' component={Home} />
        </Switch>
    );
    if (user != null) {
        return (
            <>
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >
                    <Index />
                </Suspense>
            </>
        );

    } else {
        return (
            <div className="vh-100">
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >
                    <Navbar></Navbar>
                    {routes}
                    <Footer></Footer>
                </Suspense>
            </div>
        );
    }
};
export default App;

