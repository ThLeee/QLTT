class CompanyRepository {

    constructor(connection, companyFactory) {
        this.connection     = connection;
        this.companyFactory = companyFactory;
    }

    searchByName(name) {
        return this.connection('companies')
            .where('name', 'like', '%' + name + '%')
            .where('deleted_at' , null)
            .then(results => results.map(this.companyFactory.makeFromDB));
    }
    get(id) {
        return this.connection('companies')
            .where('deleted_at' , null)
            .where('id',id).then(result => result.map(this.companyFactory.makeFromDB));
    }
    all() {
        return this.connection('companies')
            .where('deleted_at', null).then(results =>results.map(this.companyFactory.makeFromDB))
    }
    create(company) {
        return this.connection('companies').insert({
            name : company.getName(),
            phoneManager : company.getPhoneManager(),
            emailManager : company.getEmailManager(),
            address : company.getAddress(),
            nameManager : company.getNameManager()
        }).then(companyId => {
            company.setId(companyId);
            return company;
        })
    }
    update(company) {
        return this.connection('companies').update({
            name : company.getName(),
            phoneManager : company.getPhoneManager(),
            emailManager : company.getEmailManager(),
            address : company.getAddress(),
            nameManager : company.getNameManager()
        }).where({id : company.getId()}).then(()=>company)
    }
    remove(id) {
        return this.connection('companies').update({
            deleted_at : new Date().toLocaleString()
        }).where({
            id: id
        }).then(()=>id)
    }
}
module.exports = CompanyRepository;