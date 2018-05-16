module.exports = function (request, response, next) {
    request.app.get('company.repository').get(request.params.idCompany).then(result => {
        request.company = result[0];
        next();
    });
};
