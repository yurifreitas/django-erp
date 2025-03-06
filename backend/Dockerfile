# Usando Python 3.11
FROM python:3.11

WORKDIR /app

COPY ./ /app/

RUN pip install --no-cache-dir -r /app/requirements.txt

EXPOSE 8000

CMD ["gunicorn", "-b", "0.0.0.0:8000", "core.wsgi:application"]
