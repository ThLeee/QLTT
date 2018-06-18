class InternEvaluation {

    constructor(intern, lecture, council, internship) {
        this.internship = internship;
        this.intern = intern;
        this.lecture = lecture;
        this.council = council;
    }

    getInternship() {
        return this.internship;
    }

    getCouncil() {
        return this.council;
    }

    getIntern() {
        return this.intern;
    }

    getLecture() {
        return this.lecture;
    }

    setFirstPoint(firstPoint) {
        this.firstPoint = firstPoint;
        return this;
    }

    getFirstPoint() {
        return this.firstPoint;
    }

    setCompanyPoint(companyPoint) {
        this.companyPoint = companyPoint;
    }

    setLecturePoint(lecturePoint) {
        this.lecturePoint = lecturePoint;
    }

    getLecturePoint() {
        return this.lecturePoint;
    }

    setCouncilPoint(councilPoint) {
        this.councilPoint = councilPoint;
        return this;
    }

    getCouncilPoint() {
        return this.councilPoint;
    }
}

module.exports = InternEvaluation;
