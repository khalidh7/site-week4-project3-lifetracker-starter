CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  username  TEXT NOT NULL,
  password   TEXT NOT NULL,
  firstname  TEXT NOT NULL,
  lastname   TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1),
  created   TIMESTAMP NOT NULL DEFAULT NOW(),
  updated  TIMESTAMP NOT NULL DEFAULT NOW());

CREATE TABLE exercises (
  id       SERIAL PRIMARY KEY,
  userid    INTEGER REFERENCES users(id),
  date      TIMESTAMP NOT NULL DEFAULT NOW(),
  duration  INTEGER NOT NULL,
  type      TEXT NOT NULL,
  rating    INTEGER NOT NULL
  );

CREATE TABLE sleep (
  id       SERIAL PRIMARY KEY,
  userid    INTEGER REFERENCES users(id),
  date      TIMESTAMP NOT NULL DEFAULT NOW(),
  duration  INTEGER NOT NULL,
  starttime TEXT NOT NULL,
  endtime   TEXT NOT NULL);