const internEvaluationServices = require('../../src/intern-evaluation');
class InternEvaluationController {

    async add(req, res, next) {
        res.json(
            await internEvaluationServices.add(req.body).catch(next)
        );
    }

    async rate(req, res, next) {
        res.json(await internEvaluationServices.rate(req.body).catch(next));
    }

    async getHighScore(req, res, next) {
        res.json(await internEvaluationServices.getHighCore().catch(next));
    }

    async all(req, res, next) {
        res.json(await internEvaluationServices.all().catch(next));
    }
}

module.exports = InternEvaluationController;
