const Area = require('./area');
class AreaFactory {
    /**
     *
     * @param raw
     * @return {Company}
     */
    makeFromDB(raw) {
        let area = new Area(raw.company_id, raw.name);
        return area;
    }

    /**
     *
     * @param rawBody
     * @return {Company}
     */
    makeFromRequest(rawBody) {
        let area = new Area(rawBody.body.company_id, rawBody.body.name);
        area.setId(rawBody.params.id);
        return area;
    }
}

module.exports = AreaFactory;