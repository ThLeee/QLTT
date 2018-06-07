module.exports = function (request, response, next) {
    request.app.get('intern.provider').get(request.body.code).then(result => {
        request.intern = result[0];
        next();
    })
};
