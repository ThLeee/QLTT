module.exports = async function (request, response, next) {
    request.internship = await request.app.get('internship.factory').makeFromRequest(request.body, request.app, request.params.id);
    next();
};
