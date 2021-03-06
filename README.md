# AMMOKIT
Basic "decoupled application" starter project with a Django REST Framework backend and a React frontend. 
Frontend styling is done with semantic-ui.

Check the backend- and frontend-README files for more info. 

### Minimal requirements
```
Python 3.6+
Django 2.2, Django REST Framework 3.10
React 16.4
MySQL 5.7 compat (utf8mb4)
```

## Features
- account registration with email confirmation;
- reset password with email confirmation;
- account authentication using JSON Web Tokens;
- CORS support;
- Cookie-consent support;
- internationalisation using [i18next](https://www.i18next.com/).

### Backend packages (from requirements.txt)
```
django
django-anymail[mailgun]
django-cors-headers
django-extensions
djangorestframework 
djangorestframework-jwt
django-rest-auth[with_social]
```

#### Backend helper packages
```
invoke
pip-tools
```

### Frontend packages
```
react
i18next, react-i18next
react-router
redux, react-redux, redux-form, redux-saga
axios
semantic-ui-react
```
