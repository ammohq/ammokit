#!/usr/bin/env sh

python manage.py migrate

if [[ ${APPLICATION_RUN_TYPE} == "uwsgi" ]]; then
	# Still some boilerplate for when we run in uwsgi mode
    uwsgi --ini /app/docker/uwsgi_prod.ini
else
	python manage.py runserver 0.0.0.0:8000
fi
