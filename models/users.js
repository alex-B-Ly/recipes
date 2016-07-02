var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var userSchema = new Schema({
	username:{
		type: String,
		required: true,
		trim: true
	},
	password:{
		type: String,
		required: true
	}
});

userSchema.methods.validPassword = function(pass){
	return (this.password === pass);
}

module.exports = mongoose.model('User', userSchema);