const express = require('express');
const Router = express.Router();
const getUsers = require('../controllers/user')


// /API/USER

Router.post('/register', getUsers.register)
Router.post('/loggin' , getUsers.loggin)

module.exports = Router;