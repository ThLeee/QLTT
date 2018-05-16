const Lecturer = require('./lecturer');
class lecturerFactory {

    /**
     *
     * @param raw
     * @return {Lecturer}
     */
    makeFromDB(raw) {
        let lecturer = new Lecturer(raw.code);
        lecturer.setName(raw.name);
        lecturer.setGender(raw.gender);
        lecturer.setAddress(raw.address);
        lecturer.setPhone(raw.phone);
        lecturer.setEmail(raw.email);
        return lecturer;
    }
    internshipMakeFromDB(raw) {
        let lecturer = new Lecturer(raw.code);
        lecturer.setName(raw.lecturer_name);
        lecturer.setGender(raw.gender);
        lecturer.setAddress(raw.lecturer_address);
        lecturer.setPhone(raw.phone);
        lecturer.setEmail(raw.email);
        return lecturer;
    }
}
module.exports = lecturerFactory;