class CouncilRepository {

    constructor(connection) {
        this.connection = connection;
    }

    add(council) {
        council.getLectures().forEach(async (lecture) => {
            await this.connection('council_lectures').insert({
                lecture_id : lecture.getId(),
                intern_ship : council.getInternship().getId(),
                council_id : council.getId()
            })
        });
    }

}

module.exports = CouncilRepository;
