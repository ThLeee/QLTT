class CouncilRepository {

    constructor(connection) {
        this.connection = connection;
    }

    async add(council) {
        return this.connection('councils').insert({name : council.name, internship_id: council.internship_id});
    }

    async removeMember(lecture, council) {
        return this.connection('council_lectures').delete().where({
            lecture_id : lecture,
            council_id : council
        });
    }

    async addMember(council, lecture) {
        return this.connection('council_lectures').insert({
            council_id: council,
            lecture_id : lecture,
        });
    }

    async getCouncilByInternship(internship_id){
        return this.connection.select('lecturers.name',
            'councils.name as council_name',
            'lecturers.code as lecture_code', 'councils.position')
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
