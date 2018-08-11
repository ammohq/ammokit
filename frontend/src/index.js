import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {I18nextProvider} from 'react-i18next';

import App from './components/app';
import store from "./store";
import i18n from './i18n';

import 'semantic-ui-css/semantic.min.css';
import './assets/scss/app.scss';


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter basename="/">
      <I18nextProvider i18n={i18n}>
        <App/>
      </I18nextProvider>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));




