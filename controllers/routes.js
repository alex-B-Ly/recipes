var express = require('express'),
router = express.Router(),
User = require('../models/users.js'),
passport = require('passport');

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
		console.log('req session: ',req.session);
		res.send(nameArr);
	});
});

// USER CHOOSE ROUTES
router.post('/userlogin', function(req, res, next){
	passport.authenticate('login-auth', function(err, user){
		if(err){
			return next(err);
		}
		if(!user){
			return res.send({ success: false });
		}
		req.login(user, function(){
			if(err){
				return next(err);
			}
			return res.send({success: true, user: user.username});
		});
	})(req, res, next);
});

// NAVBAR ROUTES
router.post('/logout', function(req, res){
	req.session.destroy();
	res.send(true);
});

module.exports = router;