const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

class Nutrition {
  static async listNutritionForUser(userid) {
    console.log(userid);
    const results = await db.query(
      `
            SELECT id,
                   userid,
                   date,
                   name,
                   calories,
                   protein
            FROM nutrition
            WHERE userid = $1
            `,
      [userid]
    );

    if (!results) {
      throw new BadRequestError(`No sleep found for user: ${userid}`);
    }

    return results.rows;
  }

  // static async fetchNutritionById(userid, nutritionId) {
  //   const results = await db.query(
  //     `
  //           SELECT id,
  //                  userid,
  //                  date,
  //                  name,
  //                  calories,
  //                  protein
  //           FROM nutrition
  //           WHERE userid = $1 AND id = $2
  //           `,
  //     [userid, nutritionId]
  //   );

  //   const nutrition = results.rows[0];

  //   if (!nutrition) {
  //     throw new BadRequestError(`No sleep with id: ${nutritionId}`);
  //   }

  //   return nutrition;
  // }

  static async createNutrition(nutrition) {
    console.log(nutrition);
    const requiredFields = [
      "date",
      "name",
      "calories",
      "protein",
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
            INSERT INTO nutrition (date, name, calories, protein, userid)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id,
                      date,
                      name,
                      calories,
                      protein,
                      userid
            `,
      [
        nutrition.date,
        nutrition.name,
        nutrition.calories,
        nutrition.protein,
        nutrition.userid
      ]
    );

    return results.rows[0];
  }
}

module.exports = Nutrition;
