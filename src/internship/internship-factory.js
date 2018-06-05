const Internship        = require('../internship/internship');
const CompanyFactory    = require('../company/company-factory');
const LecturerFactory   = require('../lecturer/lecturer-factory');

class InternshipFactory {
    /**
     *
     * @param raw
     * @return {Internship}
     */
     makeFromDB(raw) {
        let company = new CompanyFactory().makeFromDB(raw);
        let lecturer = new LecturerFactory().internshipMakeFromDB(raw);
        let internship = new Internship(company);
        internship.setId(raw.internship_id);
        internship.setDeadline(raw.deadline);
        internship.setLecturer(lecturer);
        internship.setCourse(raw.course_id);
        return internship;
    }
    async makeFromRequest(raw, app, id) {
        let company = await app.get('company.repository').get(raw.company_id);
        let lecturer = await app.get('lecturer.provider').get(raw.lecturer_code);
        let course = await app.get('course.repository').get(raw.course_id);
        let internship = new Internship(company[0]);
        internship.setId(id || "");
        internship.setDeadline(raw.deadline);
        internship.setLecturer(lecturer[0]);
        internship.setCourse(course[0]);
        return internship;
    }
}

module.exports = InternshipFactory;
