import os

from invoke import task, Exit

from environment import base_dir, environment

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings.%s' % environment)
manage_file = os.path.join(base_dir, 'manage.py')


@task
def clean(context):
    context.run('find {} -name "*.pyc" -exec rm {{}} \;'.format(base_dir))


@task
def run(context):
    context.run('{} runserver_plus 0.0.0.0:8000 -v2 --threaded'.format(
        manage_file), pty=True
    )


@task
def migrate(context):
    context.run('{} migrate'.format(manage_file), pty=True)


@task
def pip(context):
    context.run('pip-compile requirements.in', pty=True)
    context.run('pip-sync requirements.txt', pty=True)


@task
def shell(context):
    context.run('{} shell_plus'.format(manage_file), pty=True)


@task
def test(context):
    clean(context)
    context.run('{} test -v 2'.format(manage_file), pty=True)


@task
def reset(context):
    """ Recreates database.
    """
    import django
    from django.conf import settings
    django.setup()

    if not settings.DEBUG:
        print("DEBUG is False!")
        Exit()
        return

    user = settings.DATABASES['default']['USER']
    password = settings.DATABASES['default']['PASSWORD']
    name = settings.DATABASES['default']['NAME']

    context.run('mysql -u{} -p{} -f -e "DROP DATABASE IF EXISTS {}"'.format(
        user, password, name
    ))
    context.run('mysqladmin -u{} -p{} create {}'.format(user, password, name))
    context.run('{} migrate'.format(manage_file), pty=True)

