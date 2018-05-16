class AreaRepository {
    constructor(connection, AreaFactory) {
        this.connection = connection;
        this.areaFactory = AreaFactory;
    }
    create(area) {
        return this.connection('areas').insert({
            name : area.getName(),
            company_id : area.getCompany_id()
        })
    }
    update(area) {
        return this.connection('areas').insert({
            name : area.getName(),
            company_id : area.getCompany_id()
        }).where('id',area.getId())
    }
    remove(id) {
        return this.connection('areas').update({
            deleted_at : new Date().toLocaleDateString()
        }).where({id : id, deleted_at : null})
    }
    all(company) {
        return this.connection('areas').where('deleted_at',null).where('company_id',company.getId())
            .then(results => results.map(this.areaFactory.makeFromDB))
    }
}
module.exports = AreaRepository;
