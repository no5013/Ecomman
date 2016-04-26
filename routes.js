var user = require('./models/user');
var session = require('express-session');

module.exports = {
    configure: function(app) {
        var sess;

        app.get('/users/', function(req, res) {
            if(sess) {
                user.get(res);
            } else {
                res.send('You must login!!!');
            }
        });

        //For Login
        app.get('/login', function(req, res) {
           res.render('login');
        });

        app.post('/login', function(req, res) {
            sess = req.session;
            sess.username = req.body.username;
            res.end('Login Success!!');
        });
    }
};
