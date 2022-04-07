"""
WSGI config for project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os
import logging

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')

application = get_wsgi_application()

log = logging.getLogger('goosepond')
log.critical('\n 🦢🦢🦢🦢🦢 http://localhost:8008 🦢🦢🦢🦢🦢 \n')

