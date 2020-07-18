const userMethod = {};
const { User } = require('../models/index');

userMethod.register = (req, res, next) =>{
    console.log(req.body)
    User.create(req.body)
        .then(()=> res.sendStatus(200))
        .catch(next);
};

userMethod.loggin = (req, res, next) =>{
    res.status(200).json({
        name:req.user.name,
        email:req.user.email
    })
};

userMethod.logout = (req, res, next) => {
    req.logout()
    res.json({})
};

userMethod.persistencia = (req , res , next) => {
    if(eq.isAuthenticated()){
        res.json(req.user)
    }else{
        res.json({})
    }
};


module.exports = userMethod