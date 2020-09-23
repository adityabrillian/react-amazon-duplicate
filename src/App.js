import React, { useState, useEffect, useRef } from 'react';

import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// CUSTOM by Adityabrillian

const promise = loadStripe(
    'pk_test_51HR3uNGG5vk8W9E0LHALYvdXlVa7oar7N1yRTm2h3EgyeXUi2LjH1abfrtVRwzexBzoT6hhctPidf793pVEr0IJb00vZd2KHdH'
);

function App() {
    const [{}, dispatch] = useStateValue();
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        // will only run once when the app component loads

        auth.onAuthStateChanged((authUser) => {
            console.log('THE USER IS >>> ', authUser);

            if (authUser) {
                // ther user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER', // shoot data user to layer
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER', // shoot data user to layer
                    user: null,
                });
            }
        });

        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return() => clearTimeout(timing)
    }, []);

    return (
        // BEM
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header />
                        {loading && <Home loading/>}
                        {!loading && <Home/>}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
