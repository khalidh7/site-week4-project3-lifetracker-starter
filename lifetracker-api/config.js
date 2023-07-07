require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || "postgres";
  const dbPass = process.env.DATABASE_PASS
    ? encodeURI(process.env.DATABASE_PASS)
    : "postgres";
  const dbHost = process.env.DATABASE_HOST || "local";
  const dbPort = process.env.DATABASE_PORT || 5432;
  const dbProdName = "life_tracker";
  const dbName = "life_tracker";
  return "postgres://lifetracker_db_9lh8_user:Ef5lp37AFyxHiVmsLBVEuyBxJYmkFW1o@dpg-cik5n2p8g3nc2g8e8ujg-a.oregon-postgres.render.com/lifetracker_db_9lh8";
}

const BCRYPT_WORK_FACTOR = 1;

console.log("Lifetracker Config:".red);
console.log("PORT:".blue, PORT);
console.log("BCRYPT_WORK_FACTOR".blue, BCRYPT_WORK_FACTOR);
console.log("Database:".blue, getDatabaseUri());
console.log("---");

module.exports = {
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri
};
