const authenticateServices = require('../../../src/auth/auth.provider');

class AuthController {

    async login(req, res) {
        let credential = req.credential;
        let jwtToken;
        try {
            jwtToken = await authenticateServices.authenticate(credential);
            res.status(200).json({
                token : jwtToken
            });
        }catch (e) {
            res.status(400).json({
                message : e.message
            });
        }
    }
}

module.exports = AuthController;
