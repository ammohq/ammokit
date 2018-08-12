import React, {Component} from 'react';
import Consent from "react-cookie-consent";
import {COOKIELAW_COOKIE} from "../../settings";
import i18n from "../../i18n";


export default class CookieConsent extends Component {

  render() {
    return (
      <Consent
        location="bottom"
        buttonText={i18n.t("cookieConsent.buttons.agree")}
        cookieName={COOKIELAW_COOKIE}
        style={{background: "#111111", zIndex: "1100"}}
        buttonStyle={{
          color: "#ffffff",
          background: "#cc7700",
          fontSize: "12px"
        }}
        expires={150}>
        {i18n.t("cookieConsent.text")}
      </Consent>
    )
  }
}
