import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import MainMenu from "./main-menu";
import Login from "./account/login";
import Register from "./account/register";
import ConfirmEmail from "./account/confirm-email";
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
          <Route exact path="/register" component={Register}/>
          <Route exact path="/confirm-email" component={ConfirmEmail}/>
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
