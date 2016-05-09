var express = require('express');
var PORT = process.env.PORT || 8080;
var routes = require('./controllers/routes.js');
var app = express();

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.static('app'));

app.use('/', routes);

app.listen(PORT, function(){
  console.log('listening on port ', PORT);
});