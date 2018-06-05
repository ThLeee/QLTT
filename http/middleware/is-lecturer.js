module.exports = function (request, response, next) {
    request.lecturer = request.app.get('lecturer.factory').makeFromDB(request.body);
    next();
};
