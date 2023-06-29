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
      fullname: user.fullName,
      username: user.username,
      email: user.email
    };
  }

  /**
   * Authenticate user with email and password.
   *
   * Throws UnauthorizedError if user not found or wrong password.
   *
   * @returns user
   **/

  static async authenticate(creds) {
    const { email, password } = creds;
    const requiredCreds = ["email", "password"];
    try {
      validateFields({
        required: requiredCreds,
        obj: creds,
        location: "user authentication"
      });
    } catch (err) {
      throw err;
    }

    const user = await User.fetchUserByEmail(email);

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid === true) {
        return User._createPublicUser(user);
      }
    }

    throw new UnauthorizedError("Invalid username/password");
  }

  /**
   * Register user with data.
   *
   * Throws BadRequestError on duplicates.
   *
   * @returns user
   **/

  static async register(creds) {
    const { email, password, fullname, username } = creds;
    console.log(email, password, fullname, username);
    const requiredCreds = ["email", "password", "fullname", "username"];
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
          fullname,
          username,
          email
        )
        VALUES ($1, $2, $3, $4)
        RETURNING id,
                  email,            
                  fullname AS "fullName",
                  username
                  `,
      [hashedPassword, fullname, username, normalizedEmail]
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

  static async fetchUserByEmail({ email, password }) {
    const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);
    const user = rows[0];
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
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
              fullname AS "fullName",         
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
      fullname: user.fullname,
      email: user.email
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    return token;
  }

  static async verifyAuthToken(token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (err) {
      return null;
    }
  }
}

module.exports = User;
