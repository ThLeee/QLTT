const status = require('../statuses');

class InternShipRegistrationService {
    /**
     *
     * @param {Connection}connection
     */
    constructor(connection) {
        this.connection   = connection;
    }

    send(internship_id, intern_code) {
        return this.connection('registrations').insert({
            intern_code: intern_code,
            internship_id: internship_id,
            status: status.PENDING
        })
    }

    confirm(intern_code, internship_id) {
        return this.connection('registrations').update({
            status: status.CONFIRMED
        }).where('intern_code', intern_code).limit(1).then(()=> {
            return this.connection('registrations').update({
                deleted_at : Date.now()+'',
            }).whereRaw('intern_code = ?',[intern_code]).whereRaw('internship_id <> ?',[internship_id]);
        });
    }

}

module.exports = InternShipRegistrationService;
