var express = require('express');
var router = express.Router();

var user = require('../models/user');

router.get('/', function(req, res) {
    if(!req.session.username) {
        // return res.render('You must login!!!');
    } else {
         return user.get(res);
    }
});

module.exports = router;