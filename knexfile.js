// Update with your config settings.
module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || '123456',
            database: process.env.DB_DATA || 'QLTT',
            charset: process.env.DB_TEXT || 'utf8'
        }
    }
};
