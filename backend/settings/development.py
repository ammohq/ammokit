from settings import *

DEBUG = True
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

SECRET_KEY = 'ammokit-development-key'

FRONTEND_DOMAIN = 'localhost:3000'
FRONTEND_URL = 'http://{}/'.format(FRONTEND_DOMAIN)

CORS_ORIGIN_ALLOW_ALL = True

DATABASE_DEFAULT = {
    'ENGINE': 'django.db.backends.mysql',
    'NAME': 'ammokit',
    'USER': 'development',
    'PASSWORD': 'development',

    'HOST': '127.0.0.1',
    'PORT': '3306',
    'OPTIONS': {
        'init_command': "SET sql_mode='STRICT_ALL_TABLES'",
        'charset': 'utf8mb4'
    }
}

DATABASES = {
    'default': DATABASE_DEFAULT
}

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

REST_FRAMEWORK['DEFAULT_RENDERER_CLASSES'] += (
    'rest_framework.renderers.BrowsableAPIRenderer',
)

PID_DIR = '/tmp/'

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

