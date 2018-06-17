class CouncilRepository {

    constructor(connection) {
        this.connection = connection;
    }

    add(council) {
        council.getLectures().forEach(async (lecture) => {
            await this.connection('councils').insert()
        });
    }

}

module.exports = CouncilRepository;
