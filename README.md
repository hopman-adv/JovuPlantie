Plantie

Plantie is a platform for plant sharing, chat, and plant exchange.

Project Structure

Plantie API: Backend REST API (/plantie-api)
Plantie Web App: Frontend application (/plantie-web-app)
Getting Started

Prerequisites

Node.js (version 18+ recommended)
npm or yarn
Docker (optional, for database)
PostgreSQL running (or use Docker Compose example below)
Clone the Repository

git clone https://github.com/your-org/your-plantie-repo.git
cd your-plantie-repo
Backend: Plantie API

Directory: /plantie-api

1. Install Dependencies

cd plantie-api
npm install
# or
yarn
2. Environment Variables

Create a .env file in the plantie-api directory:

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/plantie
PORT=3000
3. Run Database Migrations

npx prisma migrate deploy
4. Start the Backend Server

npm start
# or
yarn start
App will be running at http://localhost:3000

Frontend: Plantie Web App

Directory: /plantie-web-app

1. Install Dependencies

cd plantie-web-app
npm install
# or
yarn
2. Start the Frontend

npm start
# or
yarn start
This will run locally, usually at http://localhost:3001

Docker Compose Example

# docker-compose.yml
version: "3"
services:
  postgres:
    image: postgres:14
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: plantie
    ports:
      - "5432:5432"
Run with:

docker-compose up -d
Helpful Scripts

npm run lint — Lint code (from API or Web App directory)
npm run build — Build for production
