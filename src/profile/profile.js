class Profile {

    constructor(personalInformation) {
        this.personalInformation = personalInformation;
    }

    getPersionalInformation() {
        return this.personalInformation;
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setCredentialId(credentialId) {
        this.credentialId = credentialId;
        return this;
    }

    toJson() {
        return {
            credentialId : this.credentialId,
            personalInformation : this.personalInformation.toJson()
        }
    }
}

module.exports = Profile;
