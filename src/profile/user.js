class User {

    /**
     *
     * @param {Profile} profile
     * @param {Credential} credential
     */
    constructor(profile, credential) {
        this.profile = profile;
        this.credential = credential;
    }

    getProfile() {
        return this.profile;
    }

    getCredential() {
        return this.credential;
    }

    toJson() {
        return {
            profile : this.profile.toJson(),
            credential : this.credential
        }
    }
}

module.exports = User;
