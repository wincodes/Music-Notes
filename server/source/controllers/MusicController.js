const { Music } = require('../models/music')

module.exports = {
    async index(req, res) {
        try {
            const songs = await Music.findAll({
                limit: 10
            })
            res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occourred please try again'
            })
        }
    },
    async post(req, res) {
        try {
            const songs = await Music.create(req.body)
            res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occourred please try again'
            })
        }
    }
}