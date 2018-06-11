const CredentialServices = require('./credential.services');
const encoderServices = require('../encoder/encoder.provider');

module.exports = function (app) {
    let connection = app.get('databaseConnection');
    app.set('credential.services',new CredentialServices(connection, encoderServices));
};
