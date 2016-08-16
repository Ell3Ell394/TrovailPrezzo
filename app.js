
//var Xray = require('x-ray');  
//var x = Xray();

var mongoose = require('mongoose');
var fs = require('fs');

var mongoUri = 'mongodb://localhost:27017/gamesDB';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var  express = require("express");
var app = express();



//Ricordarsi, mettere prima il modello poi routes altrimenti non trova lo schema.
require('./models/game'); 


require('./routes/routes')(app);
app.use(express.static(__dirname));


app.get('/', function(req, res){
 res.render('index.html')
});



app.listen(3001);
console.log('Listening on port 3001...');






