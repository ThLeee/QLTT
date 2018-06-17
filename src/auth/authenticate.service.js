const jwt = require('jsonwebtoken');

class Authenticate {

    constructor(credentialServices, privateKey, expiresIn) {
        this.credentialServices = credentialServices;
        this.privateKey = privateKey;
        this.expiresIn = expiresIn;
    }

    async authenticate(credential) {
        let foundCredential = await this.credentialServices.getCredential(credential);
        return await jwt.sign(foundCredential, this.privateKey, {expiresIn : this.expiresIn});
    }

    credential(token) {
        return jwt.decode(token, this.privateKey);
    }
}

module.exports = Authenticate;
