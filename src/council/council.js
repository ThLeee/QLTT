class Council {

    constructor(lectures, internship) {
        this.lectures = lectures;
        this.internship = internship;
    }

    getLectures() {
        return this.lectures;
    }

    getInternship () {
        return this.internship;
    }
}

module.exports = Council;
