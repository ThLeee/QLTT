const CouncilRepository = require('./council-repository');
const connection = require('../../database/connection');

let councilRepository = new CouncilRepository(connection);

module.exports = councilRepository;
