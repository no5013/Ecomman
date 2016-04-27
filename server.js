var express = require('express');
var path = require('path');
var pug = require('pug');
var bodyparser = require('body-parser');
var cookieparser = require('cookie-parser');
var connection = require('./connection');
var session = require('express-session');

//Import from routes folder
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieparser());
app.use(session({
	secret:'asdasdasd',
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: 60000
	}
}));

app.set('views', './views');
app.set('view engine', 'pug');

connection.init();

//Init Routes
app.use('/', routes);
app.use('/users', users);

var server = app.listen(8000, function() {
    console.log('Server listening on port ' + server.address().port);
});
