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

	// TODO Passport local strategy will go here
}