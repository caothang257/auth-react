import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from '../components/Auth';
import Login from '../components/Login';
import Register from '../components/Register';

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" render={props => <Login {...props} />} />
                <Route exact path="/register" render={props => <Register {...props} />} />
                <Route exact path="/auth" render={props => <Auth {...props} />} />
            </Switch>
        </Router>
    );
}