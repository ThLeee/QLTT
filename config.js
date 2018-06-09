module.exports = {
    http: {
        port : process.env.HTTP_PORT || 8080
    },

    services : [
        require('./http'),
        require('./database'),
        require('./src/company'),
        require('./src/company/area'),
        require('./src/course'),
        require('./src/lecturer'),
        require('./src/internship'),
        require('./src/intern'),
        require('./src/internship-registration'),
        require('./src/auth'),
        require('./src/user'),
        require('./src/service'),
        // require('./router'),
    ],

    database : {
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || 'anhtien1996',
            database: process.env.DB_DATA || 'QLTT',
            charset : process.env.DB_TEXT || 'utf8'
        }
    }
};