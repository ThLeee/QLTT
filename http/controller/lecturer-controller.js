class LecturerController {

    async all(request, response, next) {
        response.json(await request.app.get('lecturer.provider').all().catch(next))
    }

    import(request, response, next) {

    }
}
module.exports = LecturerController;