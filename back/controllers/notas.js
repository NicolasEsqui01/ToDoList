const obj = {};
const { Nota , User } = require('../models/index');
const Sequelize = require('sequelize')
const Op = Sequelize.Op


obj.createNote = (req , res, next) => {
    User.findOne({
        where:{
            id:req.user.id
        }   
    }).then((user) => {
        Nota.create(req.body).then((nota) => {
            nota.setUser(user.id)
            res.sendStatus(200)
        })
    })  
    .catch((err) => res.sendStatus(500).send(err.message))
};  

obj.NotasUser = (req, res, next) =>{
    Nota.findAll({
        where:{
            userId:req.user.id
        }
    }).then((data) => res.status(200).json(data))
    .catch((err) => res.sendStatus(500).send(err.message))
};

obj.DeleteNotas = (req, res, next) =>{
    Nota.destroy({
        where:{
            id:req.params.id
        }
    }).then(() => res.sendStatus(200))
    .catch((err) => res.sendStatus(500).send(err.message))
};

obj.Actualizar = (req, res, next) =>{
    Nota.update(req.body,{
        where:{
            userId:req.params.id
        },
        returning:true
    }).then((data) => res.status(200).send(data))
    .catch((err) => res.sendStatus(500).send(err.message))
};

obj.FinalizarNota = (req, res, next) =>{
    Nota.update({
        status:'complete',
    },{
        where:{
            id:req.params.id,
            userId:req.user.id
        },
        returning:true
    }).then((data) => res.status(200).send(data))
    .catch((err) => res.sendStatus(500).send(err.message))
};

obj.Search = (req, res, next) => {
    Nota.findAll({
        where:{
            userId:req.user.id,
            title:{
                [Op.like] : `%${req.query.name}%`
            }
        }
    }).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(500).send(err.message)
    })
};




module.exports = obj;