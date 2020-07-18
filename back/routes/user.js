const express = require('express');
const Router = express.Router();
const getUsers = require('../controllers/user')
const passport = require('../config/passport')


// /API/USER

Router.post('/register', getUsers.register)
Router.post('/login' , passport.authenticate('local') , getUsers.loggin)
Router.get('/logout' , getUsers.logout)
Router.get('/persistencia' , getUsers.persistencia)

module.exports = Router;