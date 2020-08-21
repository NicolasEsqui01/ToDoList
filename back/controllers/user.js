const userMethod = {};
const { User } = require('../models/index');


userMethod.register = (req, res, next) =>{
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
        .then(() => res.sendStatus(200))
        .catch(err => {
            err.message = 'E-mail existente' 
            res.status(500).send(err.message)
        });
};

userMethod.loggin = (req, res, next) =>{
    res.status(200).json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email
    })
};

userMethod.logout = (req, res, next) => {
    req.logout();
};

userMethod.persistencia = (req , res , next) => {
    if(req.isAuthenticated()){
        res.json({
            id:req.user.id,
            name:req.user.name,
            email:req.user.email
        })
    }else{
        res.json({})
    }
};

userMethod.todosUser = (req, res, next) =>{
    User.findAll({
        attributes:['id','name','email']
    }).then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        res.status(500).send(err)
    })
};


module.exports = userMethod