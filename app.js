const express = require('express');
const app = express();
// const bodyparser = require('body-parser');
const path = require('path');
const logger = require('./middleware/logger');
const mongoose = require('mongoose');
const PORT = 5000;

// parse application/x-www-form-urlencoded
// app.use(bodyparser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyparser.json())


// body parser
app.use(express.json())
app.use(express.urlencoded({extended : false}))


// connect to mongodb
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
});

//static page
app.use(express.static(path.join(__dirname , 'public')));


app.use('/customer' , require('./routes/customermodule'))

// init middleware
// app.use(logger);

app.get('/name' , (req , res)=>{
    res.send('My name is Modulo app');
});

app.listen(PORT , () => 
console.log(`Server is listening on port ${PORT}`)
)