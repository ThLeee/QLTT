const councilRepo = require('../../src/council/councils.provider');
class CouncilController {



    async addCouncil(req, res, next) {
        res.json(await councilRepo.add(req.body).catch(next));
    }
    async all(req, res, next) {
        res.json(await councilRepo.all().catch(next));
    }

    async getCouncilByInternship(req, res, next) {
        res.json(await councilRepo.getCouncilByInternship(req.params.internship_id).catch(next));
    }
    async removeMember(req, res, next) {
        res.json(await councilRepo.removeMember(req.body.lecture_id, req.body.council_id).catch(next))
    }

    async addMember(req, res, next) {
        res.json(await councilRepo.addMember(req.body.council_id, req.body.lecture_id).catch(next))
    }
}

module.exports = CouncilController;
