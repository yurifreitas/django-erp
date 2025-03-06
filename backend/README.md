# Configuração do Django

Este guia fornece as etapas necessárias para configurar e rodar o Django corretamente dentro do ambiente Docker.

## 1. Criar as migrações do banco de dados
Gera os arquivos de migração para o banco de dados com base nos modelos definidos no projeto.
```sh
docker-compose exec backend python manage.py makemigrations
```
## 2. Aplicar as migrações
Aplica as migrações para criar as tabelas e estruturas no banco de dados.
```sh
docker-compose exec backend python manage.py migrate
```
## 3. Criar um superusuário
Cria um usuário administrativo para acessar o Django Admin.
```sh
docker-compose exec backend python manage.py createsuperuser
```
Preencha as informações solicitadas (usuário, e-mail e senha).

## 4. Coletar arquivos estáticos
Coleta todos os arquivos estáticos do Django para o diretório configurado no settings.py.
```sh
docker-compose exec backend python manage.py collectstatic --noinput
```
## 5. Rodar o servidor de desenvolvimento do Django
Inicia o servidor de desenvolvimento do Django.
```sh
docker-compose exec backend python manage.py runserver 0.0.0.0:8000
```