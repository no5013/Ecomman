var express = require('express');
var router = express.Router();

var order = require('../models/order');

router.get('/', function(req, res) {
    if(!req.session.username) {
         return res.redirect('/login')
    } else {
         order.get(req.session.shopId,function(result){
         	return res.render('order', {orders: result});
         });
    }
});

router.get('/:id', function(req, res) {

});

module.exports = router;