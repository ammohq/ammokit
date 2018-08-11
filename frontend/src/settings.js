let _apiUrl;
let _mediaUrl;

switch (process.env.NODE_ENV) {
  case 'production': {
    _apiUrl = 'https:/api/';
    _mediaUrl = '';
    break;
  }
  case 'development':
  default: {
    _apiUrl = 'http://127.0.0.1:8000/api/';
    _mediaUrl = 'http://127.0.0.1:8000';
    break;
  }
}

export const API_URL = _apiUrl;
export const MEDIA_URL = _mediaUrl;
export const DEBUG = process.env.NODE_ENV !== 'production';
export const TOKEN = 'JWT';

export const COOKIELAW_COOKIE = 'cookielaw_accepted';
