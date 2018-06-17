const authenticateService = require('../../../src/auth/auth.provider');

function resolveToken(request) {
    return {
        request.params.token ||
        request.body.token ||
        request.query.token ||
        request.get('authorization') || ''
    }
}

module.exports = async (request, response , next) => {
    let token = resolveToken(request);
    try {
        request.user = await authenticateService.credential(token);
    }catch (e) {
        response.status(401).json({
            message : 'token is must require'
        });
    }
};