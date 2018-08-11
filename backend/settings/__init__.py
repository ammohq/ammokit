import base64
import datetime
import os

from environment import base_dir as BASE_DIR

DEBUG = False

SITE_ID = 1
ALLOWED_HOSTS = []

SITE_TITLE = 'Base Project'
SITE_ADMIN_TITLE = '{} Administration'.format(SITE_TITLE)

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',
    'django.contrib.sites',

    'corsheaders',
    'rest_framework',
    'django_extensions',
    'allauth',
    'allauth.socialaccount',
    'allauth.account',
    'rest_auth.registration',
    'rest_auth',
    'apps.main',
)

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

TEMPLATES = [{
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [
        os.path.join(BASE_DIR, 'templates')
    ],
    'OPTIONS': {
        'context_processors': [
            'django.template.context_processors.debug',
            'django.contrib.auth.context_processors.auth',
            'django.contrib.messages.context_processors.messages',
            'django.template.context_processors.media',
            'django.template.context_processors.static',

            'django.template.context_processors.request',
        ],
        'loaders': [
            'django.template.loaders.filesystem.Loader',
            'django.template.loaders.app_directories.Loader',
        ]
    },
}]

ROOT_URLCONF = 'urls'
WSGI_APPLICATION = 'wsgi.application'

PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.Argon2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher',
    'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',
    'django.contrib.auth.hashers.BCryptPasswordHasher',
]

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {'min_length': 6}
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'
    }
]

JWT_AUTH = {
    'JWT_ALLOW_REFRESH': True,
    'JWT_ALGORITHM': 'HS512',
    'JWT_AUTH_HEADER_PREFIX': 'JWT',
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=30),
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=360),

    'JWT_ENCODE_HANDLER': 'rest_framework_jwt.utils.jwt_encode_handler',
    'JWT_DECODE_HANDLER': 'rest_framework_jwt.utils.jwt_decode_handler',
    'JWT_PAYLOAD_HANDLER': 'rest_framework_jwt.utils.jwt_payload_handler'
}


def _unpadded_encode(data, encoder=base64.b64encode):
    return encoder(data).rstrip(b'=').decode('ascii')


REST_USE_JWT = True

LOGOUT_ON_PASSWORD_CHANGE = False

ACCOUNT_ADAPTER = 'apps.auth.adapters.AccountAdapter'
ACCOUNT_AUTHENTICATION_METHOD = 'username'
# ACCOUNT_UNIQUE_EMAIL = True
# ACCOUNT_USER_MODEL_USERNAME_FIELD = None
# ACCOUNT_USERNAME_REQUIRED = False
# ACCOUNT_EMAIL_REQUIRED = True
# ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
# ACCOUNT_CONFIRM_EMAIL_ON_GET = True
# ACCOUNT_LOGIN_ON_EMAIL_CONFIRMATION = False

PASSWORD_MIN_LENGTH = 6

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        # 'rest_framework.authentication.SessionAuthentication'
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_RENDERER_CLASSES': (
        'rest_camel.render.CamelCaseJSONRenderer',
    ),
    'DEFAULT_PARSER_CLASSES': (
        'rest_camel.parser.CamelCaseJSONParser',
    ),
    'DEFAULT_METADATA_CLASS': 'apps.main.metadata.NoMetadata',

    'TEST_REQUEST_RENDERER_CLASSES': (
        'rest_camel.render.CamelCaseJSONRenderer',
    )
}

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True
