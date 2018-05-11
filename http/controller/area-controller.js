class AreaController {

    async create(request, response, next) {
        response.json(await request.app.get('area.repository').create(request.area).catch(next))
    }

    async update(request, response, next) {
        response.json(await request.app.get('area.repository').update(request.area).catch(next))
    }

    async remove(request, response ,next) {
        response.json(await request.app.get('area.repository').remove(request.params.id).catch(next))
    }

    async get(request, response, next) {
        response.json(await request.app.get('area.repository').get(request.params.id).catch(next));
    }

    async all(request, response, next) {
        response.json(await request.app.get('area.repository').all().catch(next))
    }

    async searchByName(request, response, next) {
        response.json(await request.app.get('area.repository').searchByName(request.query.name).catch(next))
    }

}

module.exports = AreaController;
