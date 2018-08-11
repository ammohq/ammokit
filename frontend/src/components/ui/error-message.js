import React, {Component} from 'react';
import {Message} from "semantic-ui-react";

export default class ErrorMessage extends Component {

  render() {
    const {message} = this.props;

    return (
      <Message negative>
        <Message.Header>
          {message}
        </Message.Header>
      </Message>
    )
  };
}
