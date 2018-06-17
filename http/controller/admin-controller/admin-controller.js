const credentialServices = require('../../../src/auth/credential/credential.provider');

class AdminController {

    async createCredential(request, response) {
        try {
            await credentialServices.createCredential(request.credential);
            response.status(200).json({
                type : 'success',
                message : 'create new credential successfully '
            });
        }catch (e) {
            response.json({
               type : 'error',
               message: e.message
            });
        }
    }
}

module.exports = AdminController;
