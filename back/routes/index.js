const express = require('express');
const Route = express.Router();
const user = require('./user');
const notas = require('./notas');

Route.use('/user', user);
Route.use('/notas', notas);

module.exports = Route

    