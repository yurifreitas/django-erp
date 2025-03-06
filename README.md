# django-erp
python manage.py migrate
python manage.py createsuperuser --username admin --email admin@example.com

# Django ERP para Hotel

Este projeto é um ERP (Enterprise Resource Planning) desenvolvido com Django para a gestão de hotéis. Ele inclui módulos para reservas, clientes, funcionários, pagamentos, limpeza, e gestão de quartos. O sistema é baseado em uma arquitetura backend em Django e um frontend em React com Vite.

## Estrutura do Projeto

### Backend
O backend é implementado com Django e Django REST Framework, utilizando:
- **PostgreSQL** como banco de dados
- **Redis** para cache e filas de mensagens
- **RabbitMQ** para mensageria assíncrona com Celery
- **Docker** para conteinerização e facilidade de implantação
- **Celery** para execução de tarefas assíncronas
- **Flower** para monitoramento de tarefas do Celery

### Frontend
O frontend é implementado com React e Vite, utilizando:
- **Material UI** para componentes visuais
- **React Router** para navegação
- **Zustand** para gerenciamento de estado
- **Recharts** para gráficos

## Funcionalidades Principais

- **Reservas**: Gerenciamento de reservas de clientes
- **Clientes**: Cadastro e manutenção de clientes
- **Funcionários**: Gestão de colaboradores do hotel
- **Pagamentos**: Processamento e controle financeiro
- **Limpeza**: Organização de tarefas de limpeza
- **Quartos**: Gestão e disponibilidade de acomodações
- **Dashboard**: Visão geral das operações do hotel

## Como Executar o Projeto

### Pré-requisitos
- Docker e Docker Compose instalados

### Passos para rodar o projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/yurifreitas/django-erp.git
   cd django-erp
   ```
2. Inicie os containers:
   ```sh
   docker-compose up -d
   ```
3. Acesse o backend na porta 8000:
   ```
   http://localhost:8000
   ```
4. Acesse o frontend na porta configurada no Vite:
   ```
   http://localhost:5173
   ```
5. Acesse o painel do RabbitMQ:
   ```
   http://localhost:15672
   ```
   (Usuário: `guest`, Senha: `guest`)
6. Acesse o monitoramento do Celery (Flower):
   ```
   http://localhost:5555
   ```

## Configuração do Ambiente

Crie um arquivo `.env` dentro do diretório `backend/` com as seguintes variáveis de ambiente:
```
DEBUG=True
SECRET_KEY=chave-secreta-aqui
DATABASE_URL=postgres://admin:admin@db:5432/hotel_db
REDIS_URL=redis://redis:6379/0
CELERY_BROKER_URL=redis://redis:6379/0
```

## Estrutura do Backend

O backend está organizado da seguinte forma:
- **bookings/**: Módulo de reservas
- **customers/**: Módulo de clientes
- **employees/**: Gestão de funcionários
- **housekeeping/**: Gerenciamento de limpeza
- **payments/**: Controle financeiro
- **rooms/**: Gestão de acomodações
- **dashboard/**: Dashboard com métricas e relatórios

## Estrutura do Frontend

O frontend segue esta estrutura:
- **components/**: Componentes reutilizáveis (Sidebar, Chat, etc.)
- **pages/**: Páginas principais do sistema (Dashboard, Reservas, etc.)
- **store/**: Gerenciamento de estado com Zustand
- **router.tsx**: Configuração das rotas

## Tecnologias Utilizadas

- **Django** (Backend)
- **Django REST Framework**
- **Celery + Redis + RabbitMQ** (Processamento assíncrono)
- **PostgreSQL** (Banco de dados relacional)
- **React + Vite** (Frontend)
- **Material UI** (Componentes visuais)
- **Zustand** (Gerenciamento de estado)
- **Docker + Docker Compose** (Infraestrutura e deploy)

## Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature-nova`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o repositório remoto (`git push origin feature-nova`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a **MIT License**.