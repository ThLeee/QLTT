const encoder = require('./src/auth/encoder/encoder.provider');

const credentialService = require('./src/auth/credential/credential.provider');

(async() => {
    let credential = {
        code : '1400666',
        password : await encoder.hash('123456'),
        role : 'intern'
    };
    try {
        await credentialService.createCredential(credential);
        console.log('success');
    }catch (e) {
        console.error(e.message);
    }
})();