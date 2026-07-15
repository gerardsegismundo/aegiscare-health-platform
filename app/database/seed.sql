-- Seed users for demonstration
-- Passwords are placeholders and should be hashed in a real setup.
INSERT INTO users (id, name, email, password_hash, role, created_at)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'Ava Patient', 'patient@cloudcare.local', '$2a$10$Q7wT8Y8o6Yw9H7f2e0kQje3vJ2vF8Z1sDq1g8vN4dPpFf5LqEo4e', 'patient', NOW()),
  ('22222222-2222-2222-2222-222222222222', 'Dr. Ethan Rivera', 'doctor@cloudcare.local', '$2a$10$Q7wT8Y8o6Yw9H7f2e0kQje3vJ2vF8Z1sDq1g8vN4dPpFf5LqEo4e', 'doctor', NOW()),
  ('33333333-3333-3333-3333-333333333333', 'Maya Admin', 'admin@cloudcare.local', '$2a$10$Q7wT8Y8o6Yw9H7f2e0kQje3vJ2vF8Z1sDq1g8vN4dPpFf5LqEo4e', 'admin', NOW());

INSERT INTO patients (id, user_id, date_of_birth, phone, address)
VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', '1992-05-14', '555-0101', '128 Harbor View Lane');

INSERT INTO appointments (id, patient_id, doctor_id, appointment_date, status, notes)
VALUES
  ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '22222222-2222-2222-2222-222222222222', NOW() + INTERVAL '2 days', 'scheduled', 'Follow-up consultation');

INSERT INTO medical_records (id, patient_id, doctor_id, diagnosis, notes, created_at)
VALUES
  ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '22222222-2222-2222-2222-222222222222', 'Hypertension follow-up', 'Patient reports stable blood pressure over the last week.', NOW());
