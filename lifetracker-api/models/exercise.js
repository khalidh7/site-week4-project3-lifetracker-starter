const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

class Exercise {
  static async listExercisesForUser(userid) {
    const results = await db.query(
      `
            SELECT id,
                   userid,
                   date,
                   type,
                   duration,
                   rating
            FROM exercises
            WHERE userid = $1;
            `,
      [userid]
    );
    // console.log(results.rows);

    if (!results) {
      throw new BadRequestError(`No exercises found for user: ${userid}`);
    }

    return results.rows;
  }

  static async fetchExerciseById(userid, exerciseId) {
    const results = await db.query(
      `
            SELECT id,
                   userid,
                   date,
                   type,
                   duration,
                   rating
            FROM exercises
            WHERE userid = $1 AND id = $2;
            `,
      [userid, exerciseId]
    );

    const exercise = results.rows[0];

    if (!exercise) {
      throw new BadRequestError(`No exercise with id: ${exerciseId}`);
    }

    return exercise;
  }

  static async createExercise(exercise) {
    console.log(exercise);
    const { userid, date, type, duration, rating } = exercise;
    // const requiredFields = [
    //   "date",
    //   "type",
    //   "duration",
    //   "rating",
    //   "id",
    //   "userid"
    // ];
    // requiredFields.forEach((field) => {
    //   if (!exercise.hasOwnProperty(field)) {
    //     throw new BadRequestError(
    //       `Required field - ${field} - missing from request body.`
    //     );
    //   }
    // });

    const results = await db.query(
      `
            INSERT INTO exercises (userid, date, duration, type, rating)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING
                      userid,
                      date,
                      duration,
                      type,
                      rating;
            `,
      [userid, date, duration, type, rating]
    );

    return results.rows[0];
  }
}

module.exports = Exercise;
