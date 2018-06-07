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

    confirm(id) {
        return this.connection('registrations').update({
            status: status.CONFIRMED
        }).where('id', id);
    }

}

module.exports = InternShipRegistrationService;
