let XLSX = require('xlsx');
class LecturerRepository {

    constructor(connection, lecturerFactory) {
        this.connection = connection;
        this.lecturerFactory = lecturerFactory;
    }

    get(id) {
        return this.connection('lecturers').where({
            code : id,
            deleted_at : null
        }).then(lecturers=>lecturers.map(this.lecturerFactory.makeFromDB))
    }

    all() {
        return this.connection('lecturers').where('deleted_at',null)
            .then(lecturers => lecturers.map(this.lecturerFactory.makeFromDB))
    }

    update(lecturer) {
        return this.connection('lecturers').update({
            code : lecturer.getCode(),
            name : lecturer.getName(),
            gender : lecturer.getGender(),
            email : lecturer.getEmail(),
            phone : lecturer.getPhone(),
            address : lecturer.getAddress()
        }).where('code', lecturer.getCode()).then(()=>lecturer)
    }

    delete(id) {
        return this.connection('lecturers').update({
            deleted_at : new Date().toLocaleString()
        }).where('code', id)
    }

    create(lecturer) {
        return this.connection('lecturers').insert({
            code : lecturer.getCode(),
            name : lecturer.getName(),
            gender : lecturer.getGender(),
            email : lecturer.getEmail(),
            phone : lecturer.getPhone(),
            address : lecturer.getAddress()
        }).then(()=>lecturer)
    }

    importLecturer(data) {
        return this.connection('lecturers').insert({
            code : data.code,
            name : data.name,
            gender : data.gender,
            email : data.email,
            phone : data.phone,
            address : data.address
        })
    }
}
module.exports = LecturerRepository;