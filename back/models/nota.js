const S = require('sequelize');
const db  = require('../config/db');


class Nota extends S.Model {};

Nota.init({
    title:{
        type:S.STRING,
        allowNull:false,
    },
    nota:{
        type:S.TEXT,
        allowNull:false
    }   

},{sequelize:db , modelName:'nota'})


module.exports = Nota;