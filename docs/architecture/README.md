# Architecture Overview

AegisCare is organized as a lightweight monorepo for a healthcare portal MVP.

## Components

- Frontend: Next.js 15 application for patients, doctors, and admins
- Backend: Express API with role-based routing and audit logging
- Database: PostgreSQL with SQL-only queries via `pg`
- Storage: document storage abstraction designed for future S3 integration

## AWS Target Design

The current architecture is intended to evolve into:

- Amazon ECS Fargate or EKS for runtime orchestration
- Amazon RDS PostgreSQL for persistence
- Amazon S3 for medical document storage
- Amazon Cognito for authentication
- AWS Secrets Manager for secrets
- CloudWatch for observability
