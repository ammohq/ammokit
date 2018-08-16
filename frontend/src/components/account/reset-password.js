import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {Link, Redirect} from "react-router-dom";
import {translate} from "react-i18next";
import {Button, Container, Form, Header} from "semantic-ui-react";
import FormField from "../ui/form-field";

import {required} from '../../helpers/validation';
import ErrorMessage from "../ui/error-message";
import {AUTH_PASSWORD_RESET} from "../../actions";


class ResetPasswordSuccess extends Component {
  render() {
    const {t} = this.props;
    return (
      <Container>
        <h2>{t('authentication.resetPassword.passwordReset.title')}</h2>
        <p>{t('authentication.resetPassword.passwordReset.text')}</p>
        <Button as={Link} to='/login'>
          {t('authentication.buttons.login')}
        </Button>
      </Container>
    )
  }
}

class ResetPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      success: false,
      invalidToken: false
    };
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const {uid, token} = this.props.match.params;

    return new Promise((resolve, reject) => {
      this.props.dispatch({
        type: AUTH_PASSWORD_RESET,
        data: {
          ...values,
          uid,
          token
        },
        resolve,
        reject
      });
    }).then(() => {
      this.setState({success: true});
    }).catch((error) => {
      console.log(error);
      let _error;
      if(error.errors['token']) {
        this.setState({invalidToken: true});
        _error = 'authentication.resetPassword.errors.tokenInvalid'
      }
      throw new SubmissionError({
        ...error.errors,
        _error
      });
    })
  };

  render() {
    const {t, auth, handleSubmit, pristine, submitting, error} = this.props;
    const {uid, token} = this.props.match.params;
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    if (auth.authenticated || !uid || !token) {
      return <Redirect to={from}/>;
    }
    if (this.state.success) {
      return <ResetPasswordSuccess t={t}/>;
    }

    return (
      <Fragment>
        <Header as='h2'>{t('authentication.resetPassword.title')}</Header>
        <p>{t('authentication.resetPassword.text')}</p>

        <Form onSubmit={handleSubmit(this.submit)} noValidate>
          <Field
            required={true}
            name='newPassword1'
            type='password'
            component={FormField}
            as={Form.Input}
            validate={required}
            label={t('authentication.form.password')}
            placeholder={t('authentication.form.password')}/>

          <Field
            required={true}
            name='newPassword2'
            type='password'
            component={FormField}
            as={Form.Input}
            validate={required}
            label={t('authentication.form.repeatPassword')}
            placeholder={t('authentication.form.password')}/>

          {error &&
          <ErrorMessage message={t(error)}/>
          }

          {this.state.invalidToken &&
          <Button positive as={Link} to='/forgot-password'>
            {t('authentication.buttons.resendPasswordResetLink')}
          </Button>
          }
          {!this.state.invalidToken &&
          <Button
            positive
            loading={submitting}
            disabled={pristine || submitting}>
            {t('authentication.buttons.setNewPassword')}
          </Button>
          }
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = ({auth, account}) => ({auth, account});
const resetPasswordForm = reduxForm({form: 'resetPasswordForm'})(ResetPassword);
export default connect(mapStateToProps)(translate()(resetPasswordForm));

