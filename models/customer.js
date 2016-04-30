var connection = require('../connection');

function Customer() {

	this.get = function(shopId,callback) {
        connection.acquire(function(err, con) {
            con.query('select * from customer', function(err, result) {
                con.release();
                callback(result);
            });
        });
    };

    this.getCustomerFromShopId = function(shopId,callback) {
        connection.acquire(function(err, con) {
            con.query('select * from customer where shop_id=?',[shopId], function(err, result) {
                con.release();
                callback(result);
            });
        });
    };

    this.getSearchedCustomersInShopByName = function(shopId,cusName,callback){
    	        connection.acquire(function(err, con) {
            	con.query('select * from customer where shop_id=? and cus_name like %?% ',[shopId,cusName], function(err, result) {
                con.release();
                callback(result);
            });
        });
    }
}

module.exports = new Customer();