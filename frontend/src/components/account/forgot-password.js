import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {Link, Redirect} from "react-router-dom";
import {translate} from "react-i18next";
import {Button, Container, Form, Header} from "semantic-ui-react";
import FormField from "../ui/form-field";

import {required, validateEmail} from '../../helpers/validation';
import ErrorMessage from "../ui/error-message";
import {AUTH_SEND_PASSWORD_RESET} from "../../actions";


class ResetMailSent extends Component {
  render() {
    const {t} = this.props;
    return (
      <Container>
        <h2>{t('authentication.forgotPassword.resetMailSent.title')}</h2>
        <p>{t('authentication.forgotPassword.resetMailSent.text')}</p>

        <Button as={Link} to='/'>
          {t('buttons.back')}
        </Button>
      </Container>
    )
  }
}


class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      success: false
    };
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    return new Promise((resolve, reject) => {
      this.props.dispatch({
        type: AUTH_SEND_PASSWORD_RESET,
        data: values,
        resolve,
        reject
      });
    }).then(() => {
      this.setState({success: true});
    }).catch((error) => {
      throw new SubmissionError({
        ...error.errors
      });
    })
  };

  render() {
    const {t, auth, handleSubmit, pristine, submitting, error} = this.props;
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    if (auth.authenticated) {
      return (
        <Redirect to={from}/>
      )
    }

    if (this.state.success) {
      return <ResetMailSent t={t}/>;
    }

    return (
      <Fragment>
        <Header as='h2'>{t('authentication.forgotPassword.title')}</Header>
        <p>{t('authentication.forgotPassword.text')}</p>
        <Form onSubmit={handleSubmit(this.submit)} noValidate>
          <Field
            required={true}
            name='email'
            type='text'
            component={FormField}
            as={Form.Input}
            validate={[required, validateEmail]}
            label={t('authentication.form.email')}
            placeholder={t('authentication.form.email')}/>

          {error &&
          <ErrorMessage message={error}/>
          }

          <Button as={Link} to='/'>
            {t('buttons.cancel')}
          </Button>

          <Button
            positive
            loading={submitting}
            disabled={pristine || submitting}>
            {t('authentication.buttons.sendPasswordResetLink')}
          </Button>

        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth});
const forgotPassword = reduxForm({form: 'forgotPassword'})(ForgotPassword);
export default connect(mapStateToProps)(translate()(forgotPassword));

