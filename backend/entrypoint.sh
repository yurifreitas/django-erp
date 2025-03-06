#!/bin/bash

# Inicia o Daphne em segundo plano
daphne core.asgi:application -b 0.0.0.0 -p 8001 &

# Inicia o Gunicorn em primeiro plano
gunicorn -b 0.0.0.0:8000 core.wsgi:application