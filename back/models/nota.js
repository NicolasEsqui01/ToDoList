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
    },
    status:{
        type:S.TEXT,
        defaultValue:'pending'
    },
    inicio:{
        type:S.STRING,
    }

},{sequelize:db , modelName:'nota' , timestamps:false})

Nota.addHook('beforeCreate' , (nota) =>{
    nota.inicio = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
})

module.exports = Nota;