AMMOKIT Backend
===

Starter project with account authentication and registration functionality.
Goes along with AMMOKIT Frontend.

### Minimal backend requirements
```
Python 3.6+
Django 2.1, Django REST Framework 3.8
React 16.4
MySQL 5.7 compat (utf8mb4)
```

## Backend features
- account registration;
- account email confirmation;
- email confirmation handling;
- account authentication using JSON Web Tokens;
- CORS support;

### Quick install

Using virtualenvwrapper
```
$ mkvirtualenv ammokit
$ workon -c ammokit
```
With virtualenv active and project directory as current:
```
$ pip install --upgrade pip
$ pip install invoke pip-tools
$ echo "development" > environment
```
Change your database-name and -credentials in ./settings/development.py, then (re)created the database, run migrations and run the server:
```
$ inv reset
$ inv run
```

