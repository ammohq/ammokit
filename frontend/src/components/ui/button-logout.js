import React from 'react';
import {AUTH_LOGOUT} from "../../actions";
import {connect} from "react-redux";
import {Button} from "semantic-ui-react";
import {translate} from "react-i18next";


class ButtonLogout extends React.Component {

  logout = () => {
    this.props.dispatch({type: AUTH_LOGOUT});
  };

  render() {
    const {t} = this.props;

    return (
      <Button onClick={this.logout}>
        {t('authentication.buttons.logout')}
      </Button>
    );
  }
}

export default connect()(translate()(ButtonLogout));
