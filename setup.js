'use strict'

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./db/contact.db')

function createTable() {
  db.run(`CREATE TABLE IF NOT EXISTS Contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) , phone_num VARCHAR(255)  , email VARCHAR(255));`)
}

createTable()
