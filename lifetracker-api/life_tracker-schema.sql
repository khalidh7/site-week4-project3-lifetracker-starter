CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  username  TEXT NOT NULL,
  password   TEXT NOT NULL,
  fullname  TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1));