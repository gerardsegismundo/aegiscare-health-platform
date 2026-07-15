# AegisCare Healthcare Portal

AegisCare Healthcare Portal is a production-style MVP for a healthcare patient portal designed with future AWS deployment in mind.

## Overview

This repository is organized as a lightweight monorepo with:

- `app/client`: Next.js 15 + TypeScript + Tailwind CSS frontend
- `app/server`: Node.js + Express + TypeScript REST API
- `app/database`: PostgreSQL schema, migrations, and seed data
- `infrastructure/terraform`: AWS deployment scaffolding

## Tech Stack

- Frontend: Next.js 15, TypeScript, Tailwind CSS
- Backend: Node.js, Express, TypeScript, PostgreSQL with `pg`
- Authentication: JWT-based auth abstraction intended to later be replaced by Amazon Cognito
- Document storage: storage abstraction intended to later be replaced by Amazon S3

## Local Development

1. Copy environment examples and update values.
2. Start the stack:

```bash
npm install
npm run dev
```

3. Open the frontend at `http://localhost:3000`.
4. Open the API at `http://localhost:4000`.

## Docker

```bash
docker compose up --build
```

## Security Notes

- Passwords are hashed with `bcryptjs`.
- JWT-based authentication is scaffolded as a Cognito-ready seam.
- Document storage uses an abstraction layer for eventual S3 integration.
- Audit logging is modeled in the database for HIPAA-oriented traceability.

## Deployment Roadmap

This MVP is designed for later deployment on:

- Amazon ECS Fargate or EKS
- Amazon RDS PostgreSQL
- Amazon S3
- Amazon Cognito
- AWS Secrets Manager
- CloudWatch
