CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  username  TEXT NOT NULL,
  password   TEXT NOT NULL,
  firstname  TEXT NOT NULL,
  lastname   TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1));

CREATE TABLE activity (
  id       SERIAL PRIMARY KEY,
  userid    int REFERENCES users(id),
  date      TEXT NOT NULL,
  starttime TEXT NOT NULL,
  endtime   TEXT NOT NULL,
  rating    TEXT NOT NULL);