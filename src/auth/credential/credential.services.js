const Credential = require('./credential');

class CredentialServices {

    constructor(connection, hash) {
        this.connection = connection;
        this.hash = hash;
    };

    /**
     * \
     * @param {Credential} credential
     * @return {Credential}
     */
    async getCredential(credential) {
        let credentialRaw = await this.connection('credentials').where({code : credential.getCode()});

        if (!credentialRaw) {
            throw new Error('code or password is incorrect');
        }

        if (!await this.hash.compare(credential.getPassword(), credentialRaw[0].password)){
            throw new Error('code or password is incorrect');
        }

        let foundCredential = new Credential(credentialRaw[0].code);
        foundCredential.setId(credentialRaw[0].id);
        return foundCredential;
    }
}

module.exports = CredentialServices;
