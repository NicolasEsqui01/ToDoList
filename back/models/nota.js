const S = require('sequelize');
const db  = require('../config/db');


class Nota extends S.Model {};

Nota.init({

    nota:{
        type:S.TEXT,
        allowNull:false
    }

},{sequelize:db , modelName:'nota'})


module.exports = Nota;