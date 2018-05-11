
module.exports = function (request, response, next) {
    request.area = request.app.get('area.factory').makeFromRequest(request);
    next();
};