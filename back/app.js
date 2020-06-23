require('dotenv').config()
const express = require('express');
const morgan = require('morgan');

const db = require('./config/db');
const routes = require('./routes');
const app = express()
const PORT = process.env.PORT || 3001

app.use(morgan('dev'));
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.use(express.json())


app.use('/api', routes);

app.use((err, req, res, next) =>{
    res.status(500).send(err)
});

db.sync({force:false})
    .then(()=>{
        app.listen(PORT , ()=>{
            console.log(`Escuchando en el puerto ${PORT}`)
        }); 
    })
    .catch(console.log)