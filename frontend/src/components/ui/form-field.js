import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Label, Message} from 'semantic-ui-react';


function errorMessage(message) {
  return (
    <Label color='red' pointing={true} basic={true}>{message}</Label>
  )
}


export default class FormField extends Component {

  render() {
    const {
      input,
      type,
      label,
      placeholder,
      meta: {touched, error, warning},
      as: As = Input, ...props
    } = this.props;

    return (
      <Form.Field>
        <As
          {...props}
          {...input}
          value={input.value}
          type={type}
          label={label}
          placeholder={placeholder}
          onChange={(value) => {
            return input.onChange(value)
          }}
        />
        {touched && error && errorMessage(error)}
        {touched && warning && errorMessage(warning)}
      </Form.Field>
    );
  }
}

FormField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object
};
