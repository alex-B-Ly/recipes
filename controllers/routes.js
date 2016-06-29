var express = require('express'),
router = express.Router(),
User = require('../models/users.js');

router.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

// ADD USER ROUTES

	// CREATES NEW USER
router.post('/newuser', function(req, res){
	var newUser = new User({
		username: req.body.name,
		password: req.body.password
	});

	newUser.save(function(err){
		if(err){ throw err }
	});
});

	// CHECKS IF USER IS UNIQUE 
router.post('/usercheck', function(req, res){
	User.find({}, function(err, users){
		if(err){throw err}

		var nameArr = users.map(function(user){
			return user.username;
		});

		res.send(nameArr);
	});
});

// USER CHOOSE ROUTES

router.post('/userlogin', function(req, res){
	console.log(req.body);
});

module.exports = router;