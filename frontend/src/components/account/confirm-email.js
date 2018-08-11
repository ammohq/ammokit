import React, {Component} from 'react';
import {translate} from "react-i18next";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Container} from "semantic-ui-react";

class ConfirmEmail extends Component {

  render() {
    const {t, auth} = this.props;
    if (auth.authenticated) {
      return (<Redirect to={"/"}/>);
    }

    return (
      <Container>
        <h2>{t('registration.confirmEmail.title')}</h2>
        <p>{t('registration.confirmEmail.text')}</p>
      </Container>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth});
export default connect(mapStateToProps)(translate()(ConfirmEmail));

