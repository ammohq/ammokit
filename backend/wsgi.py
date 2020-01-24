import os

if os.environ.get('APPLICATION_RUN_TYPE') != 'development':
    from environment import environment
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings.%s" % environment)

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
