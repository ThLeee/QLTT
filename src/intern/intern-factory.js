const Intern = require('./intern');
class InternFactory {

    /**
     *
     * @param raw
     * @return {Intern}
     */
    makeFromDB(raw) {
        let intern = new Intern(raw.code);
        intern.setFirstName(raw.firstName);
        intern.setLastName(raw.lastName);
        intern.setGender(raw.gender);
        intern.setDateOfBirth(raw.dateOfBirth);
        intern.setIdCard(raw.idCard);
        intern.setProvide(raw.provide);
        intern.setIssued(raw.issued);
        intern.setPhoneParent(raw.phoneParent);
        intern.setPhone(raw.phone);
        intern.setEmail(raw.email);
        intern.setAddress(raw.address);
        return intern;
    }
    makeFromDBRegistration(raw) {
        let intern = new Intern(raw.code);
        intern.setFirstName(raw.firstName);
        intern.setLastName(raw.lastName);
        intern.setGender(raw.gender);
        intern.setDateOfBirth(raw.dateOfBirth);
        intern.setIdCard(raw.idCard);
        intern.setProvide(raw.provide);
        intern.setIssued(raw.issued);
        intern.setPhoneParent(raw.phoneParent);
        intern.setPhone(raw.phone);
        intern.setEmail(raw.email);
        intern.setAddress(raw.address);
        intern.setRegistration(raw.id);
        intern.setLecturerCode(raw.lecturer_code);
        return intern;
    }

}

module.exports = InternFactory;