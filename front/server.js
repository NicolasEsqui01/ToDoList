const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT; 


app.use(express.static(__dirname + '/public'))

app.get('/*' , (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, () => console.log(`listen on port ${port}`));