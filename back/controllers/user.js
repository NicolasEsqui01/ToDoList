require('dotenv').config();
const userMethod = {};
const { User } = require("../models");
const jwt = require('jsonwebtoken');

userMethod.register = async(req, res, next) => {
    try {
        const { name, email, password } = req.body
        await User.create({ name, email, password })
        res.sendStatus(200);
    } catch (err) {
        err.message = 'E-mail Existente'
        res.status(400).send(err.message)
    }
};

userMethod.loggin = async (req, res, next) => {

    let userOne = await User.findOne({
        email:req.body.email,
    });

    console.log(userOne);

    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        img: req.user.img
    }

    const token = jwt.sign({
        user
    }, process.env.SECRET , { expiresIn: process.env.EXPIRE });

    req.userToken = token;

    res.status(200).json({
        ok:true,
        ...user,
        token
    });
};

userMethod.logout = (req, res, next) => {
    req.logout();
    res.json({});
};

userMethod.persistencia = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.json({
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            img: req.user.img
        });
    } else {
        req.logout();
        res.json({});
    }
};

userMethod.todosUser = (req, res, next) => {
    // User.findAll({
    //   attributes: ["id", "name", "email", "img"]
    // })
    //   .then(data => {
    //     res.status(200).json(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send(err);
    //   });
};

userMethod.ImagenUser = async(req, res, next) => {
    try {
        const updateImg = await User.findByIdAndUpdate({ _id: req.params.id }, { img: req.body.img });
        res.status(200).send(updateImg);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = userMethod;