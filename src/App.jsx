import { lazy, Suspense, useContext, useEffect } from 'react';

/// Components
import Index from "./jsx";
import { Route, Switch } from 'react-router-dom';
// action
/// Style
import "./main.css";
import { UserContext } from './context/UserContext';
import Home from './jsx/pages/Home';
import Login from './jsx/pages/Login';
import SignUp from './jsx/pages/SignUp';



function App() {
    const { user } = useContext(UserContext);
    useEffect(() => {
        console.log((user != null));
        // checkAutoLogin(dispatch, props.history);
    }, []
    );

    let routes = (
        <Switch>
            <Route path='/Login' component={Login} />
            <Route path='/SignUp' component={SignUp} />
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
                    {routes}
                </Suspense>
            </div>
        );
    }
};
export default App;

