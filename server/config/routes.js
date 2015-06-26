var ducks = require('../controllers/ducks.js');
module.exports = function(app){

	app.get('/', function(req, res){ducks.index(req, res)});
	app.get('/ducks/new', function(req, res){res.render('new')});
	app.post('/ducks', function(req, res){ducks.new(req, res)});
	app.get('/ducks/:id', function(req, res){ducks.show(req, res)});
	app.get('/ducks/:id/edit', function(req, res){ducks.edit(req, res)});
	app.post('/ducks/:id', function(req, res){ducks.update(req, res)});
	app.get('/ducks/:id/destroy', function(req, res){ducks.destroy(req, res)});

}