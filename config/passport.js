var localStrategy = require('passport-local').Strategy,
User = require('../models/users.js');

module.exports = function(passport){

	passport.serializeUser(function(user, done) {
	  done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findById(id, function (err, user) {
	    done(err, user);
	  });
	});	

	// Passport user login strategy
	passport.use('login-auth', new localStrategy(function(username, password, done){
		User.findOne({ username: username }, function(err, user){
			if(err){ return done(err) }
			if(!user){
				return done(null, false);
			}
			if(!user.validPassword(password)){
				return done(null, false);
			}
			return done(null, user);
		});
	}));
}