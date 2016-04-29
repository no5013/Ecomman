var express = require('express');
var router = express.Router();

var customer = require('../models/customer');

router.get('/', function(req, res) {
    if(!req.session.username) {
         return res.redirect('/login')
    } else {
         customer.get(req.session.shopId,function(result){
         	return res.render('customer', {customers: result});
         });
    }
});

router.get('/:id', function(req, res) {

});

module.exports = router;