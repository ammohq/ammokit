#!/usr/bin/env python
import os
import sys
from django.core.management import execute_from_command_line

if __name__ == "__main__":
    if os.environ.get('APPLICATION_RUN_TYPE') != "development":
        from environment import environment
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings.%s" % environment)

    execute_from_command_line(sys.argv)
