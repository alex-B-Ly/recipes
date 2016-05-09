var mongoose = require('mongoose');
var db = 'mongodb://localhost/recipes';

module.exports = mongoose.connect(db);