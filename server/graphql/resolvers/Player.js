const db = require("../../db");

module.exports = {
  firstName: (player) => player.first_name,
  lastName: (player) => player.last_name,
};
