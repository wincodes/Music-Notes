const Sequelize = require('sequelize')
const config = require('../config/config')

const db = new Sequelize({
    dialect: config.db.options.dialect,
    storage: config.db.options.storage
});

const Music = db.define("Music", {
    title: Sequelize.STRING,
    artist: Sequelize.STRING,
    genre: Sequelize.STRING,
    album: Sequelize.STRING,
    albumImageUrl: Sequelize.STRING,
    youtubeId: Sequelize.STRING,
    lyrics: Sequelize.TEXT,
    tab: Sequelize.TEXT
})

db.sync();

module.exports = { Music };