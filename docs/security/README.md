# Security Considerations

This MVP emphasizes secure-by-default design for a healthcare workload.

## Current Implementation

- Password hashing with `bcryptjs`
- JWT-based authentication abstraction
- Role-based access control for protected routes
- Audit logging for high-value actions
- Document storage abstraction to isolate file handling

## AWS Future Enhancements

- Replace JWT auth layer with Amazon Cognito
- Move document persistence to Amazon S3
- Use Secrets Manager for database and token secrets
- Add CloudWatch alarms and structured logging
