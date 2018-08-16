import React, {Component} from 'react';
import Consent from "react-cookie-consent";
import {COOKIELAW_COOKIE} from "../../settings";
import {I18n} from 'react-i18next';

export default class CookieConsent extends Component {

  render() {
    return (
      <I18n>
        {(t) => (
          <Consent
            location="bottom"
            buttonText={t("cookieConsent.buttons.agree")}
            cookieName={COOKIELAW_COOKIE}
            style={{background: "#111111", zIndex: "1100"}}
            buttonStyle={{
              color: "#ffffff",
              background: "#cc7700",
              fontSize: "12px"
            }}
            expires={150}>
            {t("cookieConsent.text")}
          </Consent>
        )}
      </I18n>
    )
  }
}
