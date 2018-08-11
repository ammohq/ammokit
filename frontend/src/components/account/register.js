import React, {Component} from 'react';
import {connect} from 'react-redux';
import {translate} from "react-i18next";
import {AUTH_REGISTER} from "../../actions";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {Button, Container, Form} from "semantic-ui-react";
import FormField from "../ui/form-field";
import {required, validateEmail} from "../../helpers/validation";


class Register extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  };

  submit(values) {
    return new Promise((resolve, reject) => {
      this.props.dispatch({
        type: AUTH_REGISTER,
        data: values,
        resolve,
        reject
      });
    }).then(() => {
      this.props.history.push('/confirm-email/');
    }).catch((error) => {
      throw new SubmissionError({
        ...error.errors,
        _error: error.errors.nonFieldErrors[0] || undefined
      });
    })
  };

  render() {
    const {t, handleSubmit, pristine, submitting, error} = this.props;

    return (
      <Container>
        <Form onSubmit={handleSubmit(this.submit)} noValidate>

          <Field
            required={true}
            name='username'
            type='text'
            component={FormField}
            as={Form.Input}
            validate={required}
            label={t('authentication.form.username')}
            placeholder='Username'/>

          <Field
            required={true}
            name='email'
            type='email'
            component={FormField}
            as={Form.Input}
            validate={[required, validateEmail]}
            label={t('authentication.form.email')}
            placeholder='Email'/>

          <Field
            required={true}
            name='password1'
            type='password'
            component={FormField}
            as={Form.Input}
            validate={required}
            label={t('authentication.form.password')}
            placeholder='Email'/>

          <Field
            required={true}
            name='password2'
            type='password'
            component={FormField}
            as={Form.Input}
            validate={required}
            label={t('authentication.form.repeatPassword')}
            placeholder='Email'/>

          {error &&
          <div className='form-wide-error mt-4'>{error}</div>
          }
          <Button
            positive
            loading={submitting}
            disabled={pristine || submitting}>
            {t('authentication.buttons.register')}
          </Button>
        </Form>

      </Container>
    );
  }
}

const registrationForm = reduxForm({form: 'registrationForm'})(Register);
export default connect()(translate()(registrationForm));