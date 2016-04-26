var express = require('express');
var path = require('path');
var pug = require('pug');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
// app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');
app.set('view engine', 'pug');

connection.init();
routes.configure(app);

var server = app.listen(8000, function() {
    console.log('Server listening on port ' + server.address().port);
});
