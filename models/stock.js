var connection = require('../connection');

function Stock() {
    this.get = function(callback) {
        connection.acquire(function(err, con) {
            con.query('select * from item', function(err, result) {
                con.release();
                callback(result);
            });
        });
    };

    this.getStockFromShopId = function(shopId,callback) {
    	connection.acquire(function(err, con) {
            con.query('select * from item where shop_id=?',[shopId], function(err, result) {
                con.release();
                callback(result);
            });
        });
    }

    //not finish
    this.getItemsFromOrder = function(orderId,callback) {
        connection.acquire(function(err, con) {
            con.query('select * from item where shop_id=?',[shopId], function(err, result) {
                con.release();
                callback(result);
            });
        });
    }

    this.getSearchedItemsInShopByName = function(shopId,itemName,callback){
                connection.acquire(function(err, con) {
                con.query('select * from item where shop_id=? and item_name like %?% ',[shopId,itemName], function(err, result) {
                con.release();
                callback(result);
            });
        });
    }
}

module.exports = new Stock();