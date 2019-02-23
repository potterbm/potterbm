const db = require('../../db');

module.exports = {
  players: async () => await db.all('SELECT * FROM users'),
};
