const connection = require("./connection.js");

const orm = {
    selectAll(table, callback) {
        connection.query(`SELECT * FROM ${ table }`, (error, results) => {
            if (error) throw error;

            callback(results);
        });
    },
    insertOne(table, col, value, callback) {
        connection.query(`INSERT INTO ${table} (${col}) VALUES (${value})`, (error, results) => {
            if (error) throw error;

            callback(results);
        });
    },
    updateOne(table, col, value, id, callback) {
        connection.query(`UPDATE ${table} SET ${col} = ${value} WHERE id = ${id}`, (error, results) => {
            if (error) throw error;

            callback(results);
        });
    }
}

module.exports = orm;