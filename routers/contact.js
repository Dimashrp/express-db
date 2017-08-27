'use strict'
var express = require('express')
var router = express.Router()
var dbModel = require('../models/dbModel')
var connector = new dbModel('./db/contact.db')
var contactModel = require('../models/contactModel')


// routing contacts
router.get('/', function(req,res) {
  contactModel.selectAll(connector.connection, function(err,data) {
      res.render('contact', {title: 'contact', dataKontak: data})
  })
})

router.post('/', function(req,res) {
  contactModel.insertData(connector.connection, req.body)
  res.redirect('/')
})

router.get('/delete/:id',function(req, res) {
  contactModel.deleteData(connector.connection, req.params)
  res.redirect('/')
})

router.get('/edit/:id', function (req,res) {
  contactModel.getEditData(connector.connection, req.params, function(err,data) {
    res.render('edit_contact', {dataEdit: data})
  })
})

router.post('/edit/:id', function(req,res) {
  contactModel.updateData(connector.connection, req.body, req.params)
  res.redirect('/contacts')
})


module.exports = router
