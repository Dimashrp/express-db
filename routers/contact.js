'use strict'
var express = require('express')
var router = express.Router()
var dbModel = require('../models/dbModel')
var connector = new dbModel('./db/contact.db')
var contactModel = require('../models/contactModel')


// routing contacts
router.get('/', function(req,res) {
  contactModel.selectAll(connector.connection, function(err,data) {
    console.log(data);
      res.render('contact', {title: 'contact', data: data})
  })
})

router.post('/', function(req,res) {
  contactModel.insertData(connector.connection, req.body)
  console.log(req.body);
  res.redirect('/')
})

router.get('/delete/:id',function(req, res) {
  contactModel.deleteData(connector.connection, req.params)
  res.redirect('/')
})

router.get('/update/:id', function (req,res) {
  contactModel.getEditData(connector.connection, req.params, function(err,data) {
    console.log(data[0]);
    res.render('editContact', {title :'update contact',data: data[0]})
  })
})

router.post('/update/:id', function(req,res) {
  contactModel.updateData(connector.connection, req)
  res.redirect('/')
})


module.exports = router
