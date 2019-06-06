// const fs = require('fs')
// const path = require('path')
// const config = require('../config/config')
// const Sequelize = require('sequelize')
// const db = {}

// const sequelize = new Sequelize(
//     config.db.database,
//     config.db.user,
//     config.db.password, {
//         dialect: config.db.options.dialect,
//         storage: config.db.options.storage,
//         host: config.db.options.host
//     }
// )

// fs.readdirSync(__dirname)
//     .filter((file) => {
//         file !== 'index.js'
//     })
//     .forEach((file) => {
//         const model = sequelize.import(path.join(__dirname, file))
//         db[model.name] = model
//     })

// db.sequelize = sequelize
// db.Sequelize = Sequelize

// module.exports = db