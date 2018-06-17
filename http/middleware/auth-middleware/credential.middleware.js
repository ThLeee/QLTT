const Credential = require('../../../src/auth/credential/credential');
function resolveCredential(rawBody) {
    let credential = new Credential(rawBody.code);
    credential.setPassword(rawBody.password);
    return credential;
}

module.exports = async (request, response, next) => {
    request.credential = resolveCredential(request.body);
    await next();
};
