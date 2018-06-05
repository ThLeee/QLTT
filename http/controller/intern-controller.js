let XLSX = require('xlsx');

class InternController {

    async all(request, response, next) {
        response.json(await request.app.get('intern.provider').all().catch(next))
    }
    async create(request, response, next) {
        response.json(await request.app.get('intern.provider').create(request.intern).catch(next))
    }
    async update(request, response, next) {
        response.json(await request.app.get('intern.provider').update(request.intern).catch(next))
    }
    async delete(request, response, next) {
        response.json(await request.app.get('intern.provider').delete(request.params.id).catch(next))
    }
    async get(request, response, next) {
        response.json(await request.app.get('intern.provider').get(request.params.id).catch(next))
    }
    importIntern(request, response, next) {
        response.json(request.dataImport.map(async intern =>await request.app.get('intern.provider').importIntern(intern).catch(next)))
    }
}
module.exports = InternController;