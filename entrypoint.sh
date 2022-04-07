#!/bin/sh
sleep 1
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput
exec "$@"