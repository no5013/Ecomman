var express = require('express');
var router = express.Router();

// var stock = require('../models/stock');
var stock = require('../models/stock');

router.get('/', function(req, res) {
    if(!req.session.username) {
        return res.redirect('/login');
    } else {
    stock.get(req.session.shopId,function(result) {   	
    	return res.render('stock', {stocks: result});
    });
    }
});

router.get('/:id', function(req, res) {
	console.log(req.params);
});

module.exports = router;