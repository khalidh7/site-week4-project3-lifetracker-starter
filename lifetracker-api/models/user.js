const db = require("../db");
const bcrypt = require("bcrypt");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const { validateFields } = require("../utils/validate");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secretKey = crypto.randomBytes(64).toString("hex");

const { BCRYPT_WORK_FACTOR } = require("../config");

class User {
  /**
   * Convert a user from the database into a user object that can be viewed publically.
   * Don't show user's password
   *
   *
   * @param {User} user - user from database
   * @returns public user
   */
  static _createPublicUser(user) {
    return {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email
    };
  }

  /**
   * Register user with data.
   *
   * Throws BadRequestError on duplicates.
   *
   * @returns user
   **/

  static async register(creds) {
    const { email, password, firstname, lastname, username } = creds;
    const requiredCreds = [
      "email",
      "password",
      "firstname",
      "lastname",
      "username"
    ];
    try {
      validateFields({
        required: requiredCreds,
        obj: creds,
        location: "user registration"
      });
    } catch (err) {
      throw err;
    }
    const existingUserWithEmail = await User.fetchUserByEmailRegister(email);
    if (existingUserWithEmail) {
      throw new BadRequestError(`Duplicate email: ${email}`);
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const normalizedEmail = email.toLowerCase();

    const result = await db.query(
      `INSERT INTO users (
          password,
          firstname,
          lastname,
          username,
          email
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id,
                  email,            
                  firstname AS "firstname",
                  lastname AS "lastname",
                  username
                  `,
      [hashedPassword, firstname, lastname, username, normalizedEmail]
    );

    const user = result.rows[0];

    return user;
  }

  /**
   * Fetch a user in the database by email
   *
   * @param {String} email
   * @returns user
   */

  static async fetchUserByEmailRegister(email) {
    const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);
    const user = rows[0];
    if (user) {
      return user;
    }
  }

  static async fetchUserByEmail(creds) {
    const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
      creds.email
    ]);
    const user = rows[0];
    if (user) {
      const isPasswordValid = await bcrypt.compare(
        creds.password,
        user.password
      );
      if (isPasswordValid) {
        return user;
      }
    }
  }

  /**
   * Fetch a user in the database by email
   *
   * @param {String} userId
   * @returns user
   */
  static async fetchById(userId) {
    const result = await db.query(
      `SELECT id,
              email,    
              password,
              firstname AS "firstname",
              "lastname" AS "lastname",         
           FROM users
           WHERE id = $1`,
      [userId]
    );

    const user = result.rows[0];

    return user;
  }

  static async generateAuthToken(user) {
    const payload = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    return token;
  }

  static async verifyAuthToken(token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      console.log("decoded", decoded);
      return decoded;
    } catch (err) {
      return null;
    }
  }
}

module.exports = User;
