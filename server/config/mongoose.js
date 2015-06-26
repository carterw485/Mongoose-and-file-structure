var mongoose = require('mongoose');
var fs = require('fs');

//connect to a DB
mongoose.connect('mongodb://localhost/duck_dashboard');
//specify the path for all of the models
var models_path = __dirname + '/../models';
//check each file in the models path and read it if it is a JavaScript file
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
});