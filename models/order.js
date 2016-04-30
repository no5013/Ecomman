var connection = require('../connection');

function Order() {
    this.get = function(callback) {
        connection.acquire(function(err, con) {
            con.query('select * from order_bill', function(err, result) {
                con.release();
                callback(result);
            });
        });
    };

    this.getOrderFromShopId = function(shopId,callback) {
        connection.acquire(function(err, con) {
            con.query('select * from order_bill where shop_id = ?',[shopId], function(err, result) {
                con.release();
                callback(result);
            });
        });
    };

    this.getOrderFromCusId = function(cusId,callback){
    	connection.acquire(function(err, con) {
            con.query('select * from order_bill where cus_id = ?',[cusId], function(err, result) {
                con.release();
                callback(result);
            });
        });
    }


    this.getOrderInShopFromStatus = function(shopId,orderStatus,callback){
    	connection.acquire(function(err, con) {
            con.query('select * from order_bill where shop_id = ? and orderStatus = ?',[shopId,orderStatus], function(err, result) {
                con.release();
                callback(result);
            });
        });
    }

    this.getOrderFromCusIdAndStatus = function(cusId,orderStatus,callback){
        connection.acquire(function(err, con) {
            con.query('select * from order_bill where cus_id = ? and orderStatus = ?',[cusId,orderStatus], function(err, result) {
                con.release();
                callback(result);
            });
        });
    }
}

module.exports = new Order();