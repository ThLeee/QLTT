const councilRepo = require('../../src/council/councils.provider');
class CouncilController {

    async addCouncil(req, res, next) {
        res.json(await councilRepo.add(req.council).catch(next));
    }

}

module.exports = CouncilController;
