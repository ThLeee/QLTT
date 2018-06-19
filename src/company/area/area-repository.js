class AreaRepository {

    constructor(connection, AreaFactory) {
        this.connection = connection;
        this.areaFactory = AreaFactory;
    }
    addIntern(intern, area) {
        return this.connection('interns').update({
            area_id : area.getId(),
        }).where({
            code : intern.getCode()
        })
    }

    listAllInternInArea(area) {
        return this.connection.select().from('areas').join('interns', function () {
            this.on('interns.area_id','=','areas.id');
        }).where({
            id : area.getId()
        });
    }

    create(area) {
        return this.connection('areas').insert({
            name : area.getName(),
            company_id : area.getCompany_id(),
            address : area.getAddress()
        }).then((id) => {
            area.setId(id);
            return area;
        })
    }

    update(area) {
        return this.connection('areas').insert({
            name : area.getName(),
            company_id : area.getCompany_id(),
            address : area.getAddress()
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
