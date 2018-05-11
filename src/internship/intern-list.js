class InternList {
    /**
     *
     * @param interns
     */
    constructor(interns = []) {
        this.interns  = interns;
    }

    add(intern) {
        this.interns.push(intern);
    }
}

module.exports = InternList;
