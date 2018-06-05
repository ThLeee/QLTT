module.exports = function (request, response, next) {
    request.app.get('course.repository').get(request.params.idCourse).then(result => {
        request.course = result[0];
        console.log(request.params.idCourse);
        next();
    });
};
