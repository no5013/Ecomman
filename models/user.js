var connection = require('../connection');

function User() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query('select * from owner', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };
}

module.exports = new User();