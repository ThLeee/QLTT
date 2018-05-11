const Company = require('../../src/company/company');
const Area    = require('../../src/company/area/area');

class CourseFactory {
    /**
     *
     * @param raw
     * @return {Company}
     */
    makeFromDB(raw) {
        let company = new Company(raw.name);
        let area = new Area(raw.company_id, raw.area_name);
        company.setArea(area);
        company.setId(raw.id);
        company.setAddress(raw.address);
        company.setPhoneManager(raw.phoneManager);
        company.setEmailManager(raw.emailManager);
        company.setNameManager(raw.nameManager);
        return company;
    }

    /**
     *
     * @param rawBody
     * @return {Company}
     */
    makeFromRequest(rawBody) {
        let raw = rawBody.body;
        let company = new Company(raw.name);
        let area = new Area(raw.company_id, raw.name);
        company.setArea(area);
        company.setId(raw.id);
        company.setAddress(raw.address);
        company.setPhoneManager(raw.phoneManager);
        company.setEmailManager(raw.emailManager);
        company.setNameManager(raw.nameManager);
        company.setId(rawBody.params.id);
        return company;
    }
}

module.exports = CourseFactory;