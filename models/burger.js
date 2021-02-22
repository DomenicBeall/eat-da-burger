const orm = require("../config/orm.js");

const burger = {
    selectAll(callback) {
        orm.selectAll("burger", (results) => {
            callback(results);
        });
    },
    insertOne() {

    },
    updateOne() {
        
    }
};

module.exports = burger;