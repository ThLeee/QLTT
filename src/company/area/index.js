const AreaRepository = require('./area-repository');
const AreaFactory    = require('./area-factory');

module.exports = function(app) {
    let connection = app.get('databaseConnection');
    app.set('area.repository', new AreaRepository(connection, new AreaFactory()));
    app.set('area.factory', new AreaFactory());
};
