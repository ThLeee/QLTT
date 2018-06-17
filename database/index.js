const connection = require('./connection');
module.exports = function (app) {
    app.set('databaseConnection', connection);
};
