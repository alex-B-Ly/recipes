var express = require('express'),
router = express.Router(),
User = require('../models/users.js');

router.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

router.post('/newuser', function(req, res){
	var newUser = new User({
		username: req.body.name,
		password: req.body.password
	});

	newUser.save(function(err){
		if(err){ throw err }
	});
});

module.exports = router;