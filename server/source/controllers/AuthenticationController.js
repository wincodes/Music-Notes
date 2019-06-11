const { User } = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
    const OneWeeK = 60 * 60 * 24 * 7

    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: OneWeeK
    })
}

module.exports = {
    async register(req, res) {
        try {
            // console.log(req.body)
            const user = await User.create(req.body)
            res.send(user)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Email already exists'
            })
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body

            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const isPasswordValid = await user.comparePassword(password)

            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Incorrect password'
                })
            }
            // console.log(user)
            const userjson = user.toJSON()
            res.status(200).send({
                user: user,
                token: jwtSignUser(userjson)
            })

        } catch (err) {

            console.log(err)

            res.status(500).send({
                error: 'An error occourred'
            })
        }
    }
}