module.exports = {
    port: process.env.PORT || 8081,
    db: {
        // database: process.env.DB_NAME || 'musicnotes',
        // user: process.env.DB_USER || 'musicnotes',
        // password: process.env.DB_PASS || 'musicnotes',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            // host: process.env.HOST || 'localhost',
            storage: './database.sqlite'
        }
    }
}