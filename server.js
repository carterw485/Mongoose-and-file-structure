var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var server = app.listen(1337);
console.log('listening on 1337');



//connects to a DB or creates one if it doesn't exist
// mongoose.connect('mongodb://localhost/duck_dashboard');

//creates the MongoDB table and columns
//change "Filler" to match your table
// var DuckSchema = new mongoose.Schema({
//     name: String,
//     color: String,
//     age: Number,
//     created_at: {type: Date, default: Date.now}
// });

// var Duck = mongoose.model('Duck', DuckSchema);

//lets us get post data
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//lets the server know where we will be keeping static files
app.use(express.static(path.join(__dirname, './client')));

//tells our server where to look when we use res.render
app.set('views', path.join(__dirname, './server/views-ejs'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
