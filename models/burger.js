const orm = require("../config/orm.js");

const burger = {
    getAll(callback) {
        orm.selectAll("burgers", (results) => {
            callback(results);
        });
    },
    addBurger(burger_name, callback) {
        orm.insertOne("burgers", "burger_name", burger_name, (result) => {
            callback(result);
        });
    },
    eatBurger(id, callback) {
        orm.updateOne("burgers", "devoured", "1", id, (result) => {
            callback(result);
        });
    }
};

module.exports = burger;