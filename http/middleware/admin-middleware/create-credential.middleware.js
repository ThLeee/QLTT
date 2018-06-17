const encoderServices = require('../../../src/auth/encoder/encoder.provider');

module.exports = async (request, response, next) => {

    let credential = {
        code : request.body.code,
        password : await encoderServices.hash(request.body.password),
        role : request.body.role
    };

    request.credential = credential;
    await next();
};