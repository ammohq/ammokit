import React, {Component} from 'react';
import {connect} from 'react-redux';
import ButtonLogout from '../ui/button-logout';
import {Menu} from "semantic-ui-react";


class MainMenu extends Component {

  render() {
    const {auth} = this.props;

    return (
      <Menu fixed='top'>
        <Menu.Item as='a' href={'/'}>
          <h1>Logo</h1>
        </Menu.Item>

        {auth.authenticated &&
        <div className="right menu">
          <Menu.Item>
            <ButtonLogout/>
          </Menu.Item>
        </div>
        }
      </Menu>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  auth
});
export default connect(mapStateToProps)(MainMenu);