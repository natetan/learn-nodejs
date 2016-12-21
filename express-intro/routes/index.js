var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// GET request of /
router.get('/', function(req, res) {

	// sends text or json or number (http code)
	// res.send({
	// 	users: ['Percy', 'Annabeth']
	// });

	// templating, takes a view and values in json
	// title is a variable from index.hjs
	res.render('index', {
		title: 'Isles of the Blest',
		desc: 'You godlings will have fun here',
	});
});

// GET request of /users
// Sends json file of the users
router.get('/users', function(req, res) {
	res.send({
		users: ['Percy', 'Annabeth']
	});
});

// Post request
router.post('/', function(req, res) {
	// Get all the post queries
	// query is all the params that came in
	// req.query.param
});

module.exports = router;
