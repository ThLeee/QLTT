const encoder = require('./src/auth/encoder/encoder.provider');

const credentialService = require('./src/auth/credential/credential.provider');

(async() => {
    let credential = {
        code : '1401754',
        password : await encoder.hash('1111'),
        role : 'student'
    };
    try {
        await credentialService.createCredential(credential);
        console.log('success');
    }catch (e) {
        console.error(e.message);
    }
})();