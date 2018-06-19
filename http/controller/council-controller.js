const councilRepo = require('../../src/council/councils.provider');
class CouncilController {

    async addCouncil(req, res, next) {
        res.json(await councilRepo.add(req.council).catch(next));
    }

    async getCouncilByInternship(req, res, next) {
        res.json(await councilRepo.getCouncilByInternship(req.params.internship_id).catch(next));
    }
}

module.exports = CouncilController;
