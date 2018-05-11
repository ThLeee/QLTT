class Area {
    constructor(company_id, name) {
        this.name = name;
        this.company_id = company_id;
    }
    getName() {
        return this.name;
    }
    getCompany_id() {
        return this.company_id;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
module.exports = Area;
