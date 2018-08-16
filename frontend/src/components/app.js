import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import MainMenu from "./main-menu";
import Login from "./account/login";
import Register from "./account/register";
import ForgotPassword from "./account/forgot-password";
import ResetPassword from "./account/reset-password";
import PrivateRoute from "../helpers/private-route";
import CookieConsent from "./ui/cookie-consent";
import Main from "./main";
import {Container} from "semantic-ui-react";


class App extends Component {

  render() {
    return (
      <Fragment>
        <MainMenu/>
        <Container className='main'>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/forgot-password" component={ForgotPassword}/>
            <Route exact path="/password/reset/:uid/:token" component={ResetPassword}/>
            <Route exact path="/register" component={Register}/>
            <PrivateRoute exact path="/" component={Main}/>
          </Switch>
        </Container>
        <CookieConsent/>
      </Fragment>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  auth
});

export default withRouter(connect(mapStateToProps)(App));
