const internEvaluationServices = require('../../src/intern-evaluation');
class InternEvaluationController {

    async add(req, res, next) {
        res.json(
            await internEvaluationServices.add(req.internEvaluation).catch(next)
        );
    }

    async rate(req, res, next) {
        res.json(await internEvaluationServices.rate(req.internEvaluation).catch(next));
    }

    async getHighScore(req, res, next) {
        res.json(await internEvaluationServices.getHightCore().catch(next));
    }
}

module.exports = InternEvaluationController;
