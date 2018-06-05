class InternProvider {
    constructor(connection, internFactory) {
        this.connection    = connection;
        this.internFactory = internFactory;
    }
    get(id) {
        return this.connection('interns').where({
            code : id, deleted_at : null
        }).then(intern => intern.map(this.internFactory.makeFromDB))
    }
    delete(id) {
        return this.connection('interns').update({
            deleted_at : new Date().toLocaleDateString()
        }).where('code',id)
    }
    all() {
        return this.connection('interns').where({deleted_at : null
        }).then(results => results.map(this.internFactory.makeFromDB))
    }
    create(intern) {
        return this.connection('interns').insert({
            code : intern.getCode(),
            lastName : intern.getLastName(),
            firstName : intern.getFirstName(),
            gender : intern.getGender(),
            dateOfBirth : intern.getDateOfBirth(),
            idCard : intern.getIdCard(),
            issued : intern.getIssued(),
            provide : intern.getProvide(),
            phone : intern.getPhone(),
            phoneParent : intern.getPhoneParent(),
            email : intern.getEmail(),
            address : intern.getAddress(),
        }).then(()=> intern)
    }
    update(intern) {
        return this.connection('interns').update({
            code : intern.getCode(),
            lastName : intern.getLastName(),
            firstName : intern.getFirstName(),
            gender : intern.getGender(),
            dateOfBirth : intern.getDateOfBirth(),
            idCard : intern.getIdCard(),
            issued : intern.getIssued(),
            provide : intern.getProvide(),
            phone : intern.getPhone(),
            phoneParent : intern.getPhoneParent(),
            email : intern.getEmail(),
            address : intern.getAddress(),
        }).where('code',intern.getCode()).then(()=> intern)
    }
    searchByName(name) {
        return this.connection('interns').where('firstName', 'like', '%' + name + '%').where({deleted_at : null
        }).then(interns => interns.map(this.internFactory.makeFromDB))
    }
    importIntern(rawIntern) {
        return this.connection('interns').insert({
            code : rawIntern.code,
            lastName : rawIntern.lastName,
            firstName : rawIntern.firstName,
            gender : rawIntern.gender,
            dateOfBirth : rawIntern.dateOfBirth,
            idCard : rawIntern.idCard,
            issued : rawIntern.issued,
            provide : rawIntern.provide,
            phone : rawIntern.phone,
            phoneParent : rawIntern.phoneParent,
            email : rawIntern.email,
            address : rawIntern.address,
        })
    }
}
module.exports = InternProvider;