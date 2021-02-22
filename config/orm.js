const connection = require("./connection.js");

const orm = {
    selectAll(table, callback) {
        connection.query(`SELECT * FROM ?`, [table], (error, results) => {
            if (error) throw error;

            callback(results);
        });
    },
    insertOne(table, burger_name, callback) {
        connection.query(`INSERT INTO ? (burger_name) VALUES (?)`, [table, burger_name], (error, results) => {
            if (error) throw error;

            callback(results);
        });
    },
    updateOne(table, burger_name, callback) {
        connection.query(`INSERT INTO ? (burger_name) VALUES (?)`, [table, burger_name], (error, results) => {
            if (error) throw error;

            callback(results);
        });
    }
}

module.exports = orm;