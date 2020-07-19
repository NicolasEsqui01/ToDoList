const userMethod = {};
const { User } = require('../models/index');

userMethod.register = (req, res, next) =>{
    User.create(req.body)
        .then(()=> res.sendStatus(200))
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
    req.logout()
    res.json({})
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


module.exports = userMethod