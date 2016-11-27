// Import (require) `connection.js` into `orm.js`
var connection = require('../config/connection.js');


//methods to excute mySQL cmnds
var orm = {
    // select all the burgers
    selectAll: function (callback) {
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);

        });

    },
// add a burger to the list
    insertOne: function (burger_name, callback) {

        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?) ", [burger_name, "0"], function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },
// update a burger to whether its eaten or not
    updateOne: function (id, callback) {
        connection.query('UPDATE burgers SET devoured = 1  WHERE id = ?', id, function (err, result) {
            if (err) throw err;
            callback(result);
        });

    }

};

// Export the ORM object in `module.exports`.
module.exports = orm;