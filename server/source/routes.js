const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const MusicController = require('./controllers/MusicController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    app.get('/musics', MusicController.index)

    app.post('/musics', MusicController.post)

    app.get('/musics/:musicId', MusicController.show)
    
    app.put('/musics/:musicId', MusicController.put)
}