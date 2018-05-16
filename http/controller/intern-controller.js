class InternController {

    async all(request, response, next) {
        response.json(await request.app.get('intern.provider').all().catch(next))
    }

    import(request, response, next) {

    }
}
module.exports = InternController;