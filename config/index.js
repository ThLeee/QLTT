module.exports = {

    http: {
        port : process.env.HTTP_PORT || 3000
    },

    services : [
        require('../http'),
        require('../database'),
        require('../src/company'),
        require('../src/company/area'),
        require('../src/course'),
        require('../src/lecturer'),
        require('../src/internship'),
        require('../src/intern'),
        require('../src/internship-registration'),
        //require('./src/auth'),
        require('../src/profile'),
        require('../src/mail-service'),
        require('../router'),
    ],
};