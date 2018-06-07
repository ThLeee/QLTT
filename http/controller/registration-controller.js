
exports.registerInternShip =  function (request, response) {
    let service      = request.app.get('registration.service');
    console.log(request.body);
    service.send(request.params.id, request.body.code).then(() => {
        response.json('success')
    });
};

exports.confirm = function (request, response) {
    let service = request.app.get('registration.service');
    service.confirm(request.params.id).then(() => {
        response.json('success')
    });
};
exports.deleteRegistration = function (request, response, next) {
    request.app.get('internshipRegistration.provider').deleteRegistration(request.params.id).then(()=> {
        response.json('success');
    }).catch(next);
};