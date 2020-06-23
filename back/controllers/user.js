const userMethod = {};
const { User } = require('../models/index');

userMethod.register = (req, res, next) =>{
    User.create(req.body)
        .then(()=> res.sendStatus(200))
        .catch(next);
};

userMethod.loggin = (req, res, next) =>{

};



module.exports = userMethod