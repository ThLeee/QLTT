class InternProvider {
    constructor(connection, internFactory) {
        this.connection    = connection;
        this.internFactory = internFactory;
    }
    get(id) {
        return this.connection('interns').where({
            code : id
        }).then(intern => this.internFactory.makeFromDB(intern[0]))
    }
    searchByName(name) {
        return this.connection('interns').where('firstName', 'like', '%' + name + '%').where({deleted_at : null
        }).then(interns => interns.map(this.internFactory.makeFromDB))
    }
}
module.exports = InternProvider;