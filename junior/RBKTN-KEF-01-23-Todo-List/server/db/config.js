const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create a table
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS list (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      task VARCHAR(255) NOT NULL,
      status TINYINT NOT NULL DEFAULT '0'
    );`)
    .error(err => {
      console.log(err);
    });
};