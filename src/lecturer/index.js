const LecturerFactory       = require('./lecturer-factory');
const LecturerProvider      = require('./lecturer-provider');
module.exports= function (app) {
    let connection = app.get('databaseConnection');
    app.set('lecturer.factory' , new LecturerFactory());
    app.set('lecturer.provider', new LecturerProvider(connection,new LecturerFactory()));
};