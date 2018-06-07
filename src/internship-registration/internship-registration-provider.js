const status = require('../statuses');
class InternShipRegistrationRepository {
    /**
     *
     * @param {Connection} connection
     * @param internFactory
     */
    constructor(connection, internFactory) {
        this.connection    = connection;
        this.internFactory = internFactory;
    }

    /**
     * @param {int} internship_id
     */

    getListPENDING(internship_id) {
        return this.connection
            .select(
                'interns.lastName','interns.firstName','interns.dateOfBirth','interns.issued','interns.provide'
                ,'interns.idCard', 'interns.code', 'interns.gender', 'interns.phone', 'interns.phoneParent',
                'interns.address', 'interns.email', 'registrations.status','internships.id')
            .from('registrations')
            .leftJoin('interns', function () {
                this.on('registrations.intern_code', '=', 'interns.code')
            }).where({internship_id : internship_id, status : status.PENDING, deleted_at : null
            }).then(interns => interns.map(this.internFactory.makeFromDBRegistration))
    }
    getListPENDINGLecturer(internship_id) {
        return this.connection
            .select(
                'interns.lastName','interns.firstName','interns.dateOfBirth','interns.issued','interns.provide'
                ,'interns.idCard', 'interns.code', 'interns.gender', 'interns.phone', 'interns.phoneParent',
                'interns.address', 'interns.email', 'registrations.status','registrations.id' ,'registrations.lecturer_code')
            .from('registrations')
            .leftJoin('interns', function () {
                this.on('registrations.intern_code', '=', 'interns.code')
            }).where({internship_id : internship_id, status : status.PENDING, 'registrations.deleted_at' : null
            }).then(interns => interns.map(this.internFactory.makeFromDBRegistration))
    }
    getListCONFIRMEDLecturer(internship_id) {
        return this.connection
            .select(
                'interns.lastName','interns.firstName','interns.dateOfBirth','interns.issued','interns.provide'
                ,'interns.idCard', 'interns.code', 'interns.gender', 'interns.phone', 'interns.phoneParent',
                'interns.address', 'interns.email', 'registrations.status','registrations.id','registrations.lecturer_code')
            .from('registrations')
            .leftJoin('interns', function () {
                this.on('registrations.intern_code', '=', 'interns.code')
            }).where({internship_id : internship_id, status : status.CONFIRMED, 'registrations.deleted_at' : null
            }).then(interns => interns.map(this.internFactory.makeFromDBRegistration))
    }
    getCONFIRMED(internship_id) {
        return this.connection
            .select(
                'interns.lastName','interns.firstName','interns.dateOfBirth','interns.issued','interns.provide',
                'interns.idCard', 'interns.code', 'interns.gender', 'interns.phone', 'interns.phoneParent',
                'interns.address', 'interns.email', 'registrations.status')
            .from('registrations')
            .leftJoin('interns', function () {
                this.on('registrations.intern_code', '=', 'interns.code')
            }).where({internship_id : internship_id, status : status.CONFIRMED, deleted_at : null
            }).then(interns => interns.map(this.internFactory.makeFromDB))
    }
    get(intern_code, internship_id) {
        return this.connection('registrations').where({
            internship_id : internship_id,
            intern_code : intern_code
        }).then(registration =>
            (registration.length)
        )
    }
    deleteRegistration(id) {
        return this.connection('registrations').update({
            deleted_at : new Date().toLocaleString()
        }).where('id',id)
    }
}

module.exports = InternShipRegistrationRepository;