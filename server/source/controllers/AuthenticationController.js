const { User } = require('../models/user')

module.exports = {
    async register(req, res) {
        try {
            console.log(req.body)
            const user = await User.create(req.body)
            res.send(user)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'This Email Account Already Exists'
            })
        }
    }
}