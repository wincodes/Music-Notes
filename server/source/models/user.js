const Sequelize = require("sequelize");

const db = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
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


// module.exports = (sequelize, DataTypes) => {
//     sequelize.define('User', {
//         email: {
//             type: DataTypes.STRING,
//             unique: true
//         },
//         password: DataTypes.STRING
//     })
// }