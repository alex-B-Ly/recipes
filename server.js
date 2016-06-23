var express = require('express'),
PORT = process.env.PORT || 8080,
db = require('./config/connection.js'),
routes = require('./controllers/routes.js'),
bodyParser = require('body-parser'),
app = express();

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.static('app'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, function(){
  console.log('listening on port ', PORT);
});