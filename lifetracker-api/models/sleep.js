const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

class Sleep {
  static async listSleepForUser(userid) {
    console.log(userid);
    const results = await db.query(
      `
            SELECT id,
                   userid,
                   date,
                   duration,
                   starttime,
                   endtime
            FROM sleep
            WHERE userid = $1
            `,
      [userid]
    );

    if (!results) {
      throw new BadRequestError(`No sleep found for user: ${userid}`);
    }

    return results.rows;
  }

  static async fetchSleepById(userid, sleepId) {
    const results = await db.query(
      `
            SELECT id,
                   userid,
                   date,
                   duration,
                   starttime,
                   endtime,
            FROM sleep
            WHERE userid = $1 AND id = $2
            `,
      [userid, sleepId]
    );

    const sleep = results.rows[0];

    if (!sleep) {
      throw new BadRequestError(`No sleep with id: ${sleepId}`);
    }

    return sleep;
  }

  static async createSleep(sleep) {
    console.log(sleep);
    const requiredFields = [
      "date",
      "duration",
      "starttime",
      "endtime",
      "id",
      "userid"
    ];
    // requiredFields.forEach((field) => {
    //   if (!sleep.hasOwnProperty(field)) {
    //     throw new BadRequestError(
    //       `Missing required field - ${field} - in request body.`
    //     );
    //   }
    // });

    // if (sleep.userid !== user.id) {
    //   throw new UnauthorizedError(
    //     `User with id: ${user.id} does not have permission to create sleep with id: ${sleep.id}`
    //   );
    // }

    const results = await db.query(
      `
            INSERT INTO sleep (date, duration, starttime, endtime, userid)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id,
                      date,
                      duration,
                      starttime,
                      endtime,
                      userid
            `,
      [sleep.date, sleep.duration, sleep.starttime, sleep.endtime, sleep.userid]
    );

    return results.rows[0];
  }
}

module.exports = Sleep;
