var express = require('express'),
PORT = process.env.PORT || 8080,
mongoose = require('mongoose'),
db = require('./config/connection.js'),
session = require('express-session'),
passport = require('passport'),
mongoStore = require('connect-mongo')(session),
routes = require('./controllers/routes.js'),
bodyParser = require('body-parser'),
app = express();

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.static('app'));

app.use(session({
	secret: 'developersdevelopersdevelopers',
	saveUninitialized: true,
	resave: true,
	// TODO Replace cookie below with mongoStore for persistent session
	store: new mongoStore({
		mongooseConnection: mongoose.connection,
		ttl: 2 * 60 * 60
	})
}));
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, function(){
  console.log('listening on port ', PORT);
});