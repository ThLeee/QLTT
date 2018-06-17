const CredentialServices = require('./credential.services');
const encoderServices = require('../encoder/encoder.provider');
const connection = require('../../../database/connection');

let credentialService = new CredentialServices(connection, encoderServices);

module.exports = credentialService;

