'use strict'

var sqlite3 = require('sqlite3').verbose()

class Database {
  constructor(fileDb) {
    this.connection = new sqlite3.Database(fileDb)
  }

  createTable() {
    this.connection.run(`CREATE TABLE IF NOT EXISTS Contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) , phone_num VARCHAR(255)  , email VARCHAR(255));`)
  }
}

module.exports = Database
