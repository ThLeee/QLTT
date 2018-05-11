const InternProvider = require('./intern-provider');
const InternFactory    = require('./intern-factory');

module.exports = function(app) {
    let connection = app.get('databaseConnection');
    app.set('intern.provider', new InternProvider(connection, new InternFactory()));
    app.set('intern.factory', new InternFactory());
};
