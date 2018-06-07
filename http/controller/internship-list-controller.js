
exports.getListPENDING = function (request, response, next) {
    request.app.get('internshipRegistration.provider').getListPENDING(request.params.id).then(result => {
        response.json(result);
    }).catch(next);
};
exports.getListPENDINGLecturer = function (request, response, next) {
    request.app.get('internshipRegistration.provider').getListPENDINGLecturer(request.params.id).then(result => {
        response.json(result);
    }).catch(next);
};
exports.getListCONFIRMEDLecturer = function (request, response, next) {
    console.log(request.body);
    request.app.get('internshipRegistration.provider').getListCONFIRMEDLecturer(request.params.id).then(result => {
        response.json(result);
    }).catch(next);
};

exports.getListCONFIRMED = function (request, response, next) {
    request.app.get('internshipRegistration.provider').getCONFIRMED(request.params.id).then(result => {
        response.json(result);
    }).catch(next);
};