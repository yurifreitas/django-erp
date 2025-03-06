# Usando Python 3.11
FROM python:3.11

WORKDIR /app

COPY ./ /app/

RUN pip install --no-cache-dir -r /app/requirements.txt

# Cria um script de entrada
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/entrypoint.sh"]