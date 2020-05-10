const db = require("../../db");

const updatePlayerSQL = `
  UPDATE users
  SET
    first_name = $firstName,
    last_name = $lastName,
    winnings = $winnings,
    email = $email,
    photo = $photo
  WHERE id = $id
`;

const insertPlayerSQL = `
  INSERT INTO users(first_name, last_name, winnings, email, password, photo)
  VALUES ($firstName, $lastName, $winnings, $email, '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', $photo)
`;

module.exports = {
  updatePlayer: async (root, args) => {
    const sql = args.id ? updatePlayerSQL : insertPlayerSQL;

    const playerData = await db.run(sql, {
      $email: args.email,
      $firstName: args.firstName,
      $id: args.id,
      $lastName: args.lastName,
      $photo: args.photo,
      $winnings: args.winnings,
    });

    return await db.get("SELECT * FROM users WHERE id = ?", [
      playerData.lastID || args.id,
    ]);
  },
};
