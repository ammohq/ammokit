import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';


i18n.use(XHR).init({

  react: {
    wait: true
  },

  preload: ['en', 'dev'],


  backend: {
    loadPath: `/locale/{{lng}}.json`,
    crossDomain: false,
    withCredentials: false,
  },

  lng: 'en',
  fallbackLng: 'dev',

  debug: false,

  interpolation: {
    escapeValue: false
  },

});


export default i18n;