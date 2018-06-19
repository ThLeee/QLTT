class InternEvaluation {

    constructor(intern, internship) {
        this.internship = internship;
        this.intern = intern;
    }

    getInternship() {
        return this.internship;
    }

    getIntern() {
        return this.intern;
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

    getCompanyPoint() {
        return this.companyPoint;
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

    setFinalPoint(finalPoint) {
        this.finalPoint = finalPoint;
    }

    getFinalPoint() {
        return this.finalPoint;
    }

}

module.exports = InternEvaluation;
