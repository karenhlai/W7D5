//automate process of allowing user to see certian copoennets when loggedin/out
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom'; 


//get different props user will rely on 

const msp = (state) => (
    {
        loggedIn: Boolean(state.session.currentUser) //checks if currentUser exists
    }
);


//<AuthRoute path=""" component={} />" User will see this when logged out?
//coponent is value; Component will allow us to render  the Component
//auth routes
const Auth = ({ loggedIn, path, component: Component }) => ( 
    <Route path={path} render={props => (
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}  /> 

);

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route path={path} render={props => (
        loggedIn ? <Component {...props} /> : <Redirect to="/" /> 
    )} />
)

// const BoolRoute = 

//withRouter allows access to history, location, and map?
export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));