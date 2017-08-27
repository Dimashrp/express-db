'use strict'

class Contact {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.phone = data.phone_num
    this.email = data.email
  }

  static selectAll(connection, callback) {
    connection.all(`SELECT * FROM Contacts;`, function(err,dataKontak) {
      if(!err) {
        callback(false, dataKontak)
      }
      else {
        callback(true, null)
      }
    })
  }

  static insertData(connection, request) {
    connection.run(`INSERT INTO Contacts (name,phone_num,email) VALUES ('${request.nama}', '${request.phone}', '${request.email}');`)
  }

  static deleteData(connection, request) {
    connection.run(`DELETE FROM Contacts WHERE id=${request.id}`)
  }

  static getEditData(connection, request, callback) {
    connection.all(`SELECT * FROM Contacts WHERE id = '${request.id}';`, function(err,data) {
      if(!err) {
        callback(false, data)
      }
      else {
        callback(true, null)
      }
    })
  }

  static updateData(connection, request) {
    connection.run(`UPDATE Contacts SET name='${request.body.nama}', phone_num='${request.body.phone}', email='${request.body.email}' WHERE id = ${request.params.id}`)
  }
}

module.exports = Contact
