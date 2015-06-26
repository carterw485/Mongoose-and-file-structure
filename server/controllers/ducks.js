var mongoose = require('mongoose');
var Duck = mongoose.model('Duck');

var duckController = {};

duckController.index = function(req, res){
	Duck.find({}, function(err, ducks){
		if(err){
			res.send('Error!');
		}
		else{
			res.render('index', {ducks: ducks});
		}
	});
};
duckController.show = function(req, res){
	Duck.findOne({_id: req.params.id}, function(err, duck){
		if(err){
			console.log('Error!');
		}
		else{
			res.render('show', {duck: duck});
		}
	});
};
duckController.new = function(req, res){

	var duck = new Duck(req.body);
	duck.save(function(err){
		if(err){
			console.log('Error!');
		}
		else{
			console.log('Successfully added a duck!');
			res.redirect('/');
		}
	});
};
duckController.edit = function(req, res){
	Duck.findOne({_id: req.params.id}, function(err, duck){
		if(err){
			console.log('Error!');
		}
		else{
			res.render('edit', {duck: duck});
		}
	});
};
duckController.update = function(req, res){
	Duck.update({_id: req.params.id}, req.body,function(err, duck){
		if(err){
			console.log('Error!');
		}
		else{
			res.redirect('/');
		}
	});
};
duckController.destroy = function(req, res){
	Duck.remove({_id: req.params.id}, function(err, duck){
		if(err){
			console.log('Error!');
		}
		else{
			res.redirect('/');
		}
	});
};


module.exports = duckController;