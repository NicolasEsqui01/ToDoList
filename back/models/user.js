const S = require('sequelize');
const db = require('../config/db');

class User extends S.Model {};

User.init({

    name:{
        type:S.STRING,
        allowNull:false
    },
    email:{
        type:S.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:S.STRING,
        allowNull:false
    },
    salt:{
        type:S.STRING
    }

},{sequelize:db , modelName:'user'});