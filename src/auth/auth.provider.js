const credentialService = require('./credential/credential.provider');
const config = require('../../config/auth');
const AuthenticateService = require('./authenticate.service');

let authenticateService = new AuthenticateService(credentialService, config.privateKey, config.authExpired);

module.exports = authenticateService;
