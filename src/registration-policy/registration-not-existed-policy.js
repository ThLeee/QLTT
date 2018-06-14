class RegistrationNotExistedPolicy {
    constructor(connection) {
        this.connection = connection;
    }

    check(intern, internship) {
        return this.connection('registrations').where({
            intern_id : intern.getId(),
            internship_id : internship.getId()
        }).then(registrationRawData=>{
            return !registrationRawData.length
        })
    }
}

module.exports = RegistrationNotExistedPolicy;
