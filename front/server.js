const express = require("express");
const PORT = process.env.PORT || 80 
require("dotenv").config();

const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/*' , (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(PORT, () => console.log(`listen on port ${PORT}`));