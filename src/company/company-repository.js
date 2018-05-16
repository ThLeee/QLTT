class CompanyRepository {

    constructor(connection, companyFactory) {
        this.connection     = connection;
        this.companyFactory = companyFactory;
    }

    searchByName(name) {
        return this.connection
            .select( 'companies.id', 'companies.name', 'companies.phoneManager', 'companies.emailManager', 'companies.nameManager', 'companies.address',
                'areas.id as area_id','areas.name as area_name')
            .from('companies')
            .leftJoin('areas', function () {
                this.on('companies.id', '=', 'ares.company_id')
            })
            .where('name', 'like', '%' + name + '%')
            .where('deleted_at' , null)
            .then(results => results.map(this.companyFactory.makeFromDB));
    }
    get(id) {
        return this.connection
            .select( 'companies.id', 'companies.name', 'companies.phoneManager', 'companies.emailManager', 'companies.nameManager', 'companies.address',
                'areas.id as area_id','areas.name as area_name')
            .from('companies')
            .leftJoin('areas', function () {
                this.on('companies.id', '=', 'ares.company_id')
            }).where({id : id, deleted_at : null}).then(result => result.map(this.companyFactory.makeFromDB));
    }
    all() {
        return this.connection
            .select( 'companies.id', 'companies.name', 'companies.phoneManager', 'companies.emailManager', 'companies.nameManager', 'companies.address','areas.name as area_name')
            .from('companies')
            .leftJoin('areas', function () {
                this.on('companies.id', '=', 'areas.company_id')
            })
            .where('companies.deleted_at', null).then(results => {
                console.log(results);
                return results.map(this.companyFactory.makeFromDB)
            })
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