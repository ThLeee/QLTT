class SearchAdvanced {
    async search(request, response, next) {
        let course = request.app.get('course.repository').searchByName(request.query.keyword).catch(next);
        let companies = request.app.get('company.repository').searchByName(request.query.keyword).catch(next);
        let interns = request.app.get('intern.provider').searchByName(request.query.keyword).catch(next);
        response.json([await course,await companies,await interns]);
    }
}
module.exports = SearchAdvanced;