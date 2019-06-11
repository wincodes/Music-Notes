const Sequelize = require("sequelize");
const config = require('../config/config')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user) {
    const value = 8

    if (!user.changed('password')) {
        return
    }

    return bcrypt.genSaltAsync(value)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

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
}, {
    hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        // beforeSave: hashPassword
    }
});

User.prototype.comparePassword = function(password) {
    return bcrypt.compareAsync(password, this.password)
}

db.sync();

module.exports = { User };