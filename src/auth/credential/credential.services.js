const LoginError = require('./login-error');
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
            throw new LoginError('code or password is incorrect');
        }

        if (!await this.hash.compare(credential.getPassword(), credentialRaw[0].password)){
            throw new LoginError('code or password is incorrect');
        }

        return {
            id : credentialRaw[0].id,
            code : credentialRaw[0].code,
            role : credentialRaw[0].role
        }

    }

    async createCredential(credential) {
        let result = await this.connection('credentials').where('code',credential.code);

        if (!result.length) {
            return await this.connection('credentials').insert(credential);
        }
        throw new Error('student code is existed');
    }
}

module.exports = CredentialServices;
