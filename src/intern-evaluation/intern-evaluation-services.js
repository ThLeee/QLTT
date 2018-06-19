class InternEvaluationService {
    constructor(connection) {
        this.connection = connection;
    }

    rate(internEvaluation) {
        return this.connection('rates').update({
            intern_id : internEvaluation.getIntern().getCode(),
            internship_id : internEvaluation.getInternship().getId(),
            first_point : internEvaluation.getFirstPoint(),
            lecture_point : internEvaluation.getLecturePoint(),
            company_point : internEvaluation.getCompanyPoint(),
            council_point : internEvaluation.getCouncilPoint(),
            finale_point : internEvaluation.getFinalPoint(),
        });
    }
    add(internEvaluation) {
        return this.connection('rates').insert({
            intern_id : internEvaluation.getIntern().getCode(),
            internship_id: internEvaluation.getInternship().getId()
        });
    }

    getHightCore(){
        return this.connection('rates').orderBy('final','desc').limit(10);
    }
}

module.exports = InternEvaluationService;
