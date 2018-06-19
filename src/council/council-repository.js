class CouncilRepository {

    constructor(connection) {
        this.connection = connection;
    }

    async add(council) {
        council.getLectures().forEach(async (lecture) => {
            await this.connection('council_lectures').insert({
                lecture_id : lecture.getCode(),
                internship_id : council.getInternship().getId(),
                council_id : council.getId()
            })
        });
    }

   async getCouncilByInternship(internship_id){
        return this.connection.select('lecturers.name',
            'councils.name as council_name',
            'lecturers.code as lecture_code')
            .from('council_lectures')
            .leftJoin('lecturers', function () {
            this.on('lecture_id','=','lecturers.code');
        }).leftJoin('councils',function () {
                this.on('council_lectures.council_id','=', 'councils.id');
            })
            .where({internship_id : internship_id});
    }

}

module.exports = CouncilRepository;
