module.exports = function (request, response, next) {
    request.intern = request.app.get('intern.factory').makeFromDB(request.body);
    next();
};
