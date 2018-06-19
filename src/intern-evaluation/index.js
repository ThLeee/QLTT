const InternEvaluationService = require('./intern-evaluation-services');
const connection = require('../../database/connection');

let internEvaluationService = new InternEvaluationService(connection);

module.exports = internEvaluationService;
