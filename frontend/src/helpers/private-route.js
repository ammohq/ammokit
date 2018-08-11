import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";


const PrivateRoute = ({auth, component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    auth.authenticated ? <Component {...props} /> : <Redirect to='/login'/>
  )}/>
);

const mapStateToProps = ({auth}) => ({auth});
export default connect(mapStateToProps)(PrivateRoute);




