const path    = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.resolve(__dirname, './sqlite.db'));

// Converts this callback-based async library into a promise-based one
function promisifyCallback(functionName, collectDataFromThis = false) {
  return async function (...params) {
    return new Promise((resolve, reject) => {
      db[functionName](...params, function (err, ...callbackParams) {
        if (err) return reject(err);

        if (collectDataFromThis) {
          return resolve({
            changes : this.changes,
            lastID  : this.lastID,
          });
        }

        return resolve(...callbackParams);
      });
    });
  };
}

module.exports = {
  all : promisifyCallback('all'),
  get : promisifyCallback('get'),
  run : promisifyCallback('run', true)
};
