# AI Image Editor API

REST API for AI-powered image editing built with Node.js, TypeScript, Express, TypeORM and PostgreSQL.

## Features

- Text to Image
- Sketch to Image
- Magic Eraser
- Image Resizer
- JWT Authentication
- API Key Authentication with rate limits
- PostgreSQL + TypeORM
- Docker Support

## Tech Stack

Node.js, TypeScript, Express 5, TypeORM, PostgreSQL, JWT

## Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL
- Docker & Docker Compose (optional)

### Installation

1. Clone the repository
`ash
git clone https://github.com/JoelSerrano1/ai-image-editor-api.git
cd ai-image-editor-api
`

2. Install dependencies
`ash
npm install
`

3. Set up environment variables
`ash
cp .env.example .env
`
Edit .env with your database credentials and configuration.

4. Run with Docker (recommended)
`ash
docker-compose up -d
`

5. Run migrations
`ash
npm run migrations:run
`

6. Start development server
`ash
npm run dev
`

The API will be available at http://localhost:8080

## Scripts

`ash
npm run dev
npm run build
npm run migrations:generate
npm run migrations:run
npm run migrations:run:fresh
`

