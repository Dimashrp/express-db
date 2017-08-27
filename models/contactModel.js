'use strict'

class Contact {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.company = data.company
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
    connection.run(`INSERT INTO Contacts (name,company,phone_num,email) VALUES ('${request.formName}', '${request.formCompany}', '${request.formPhone}', '${request.formEmail}');`)
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

  static updateData(connection, request1, request2) {
    connection.run(`UPDATE Contacts SET name='${request1.formName}', phone_num='${request1.formPhone}', email='${request1.formEmail}' WHERE id = ${request2.id}`)
  }
}

module.exports = Contact
