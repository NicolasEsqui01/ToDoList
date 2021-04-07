const mongoose = require('mongoose');

mongoose.connect(process.env.DBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})

const db = mongoose.connection;

db.once("open", () => {
    console.log('Conectando la db')
});


