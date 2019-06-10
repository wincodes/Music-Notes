const Sequelize = require("sequelize");
const config = require('../config/config')

const db = new Sequelize({
    dialect: config.db.options.dialect,
    storage: config.db.options.storage
});

const User = db.define("User", {
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING
});

db.sync();

module.exports = { User };