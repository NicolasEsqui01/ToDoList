require("dotenv").config();
const express = require("express");
const path = require('path');

const app = express();
const port = process.env.PORT; 


app.use(express.static(path.join(__dirname,'/public')))

app.get('/*' , (req, res, next) => {
    res.sendFile(path.join(__dirname,'/public/index.html'))
});

app.listen(port, () => console.log(`listen on port ${port}`));