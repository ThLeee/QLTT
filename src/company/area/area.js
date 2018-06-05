class Area {
    constructor(company_id, name, address) {
        this.name = name;
        this.company_id = company_id;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
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
