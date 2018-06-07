module.exports = function (request, response, next) {
    request.app.get('internship.repository').get(request.params.id, ).then(result => {
        request.internship = result[0];
        next();
    })
};
