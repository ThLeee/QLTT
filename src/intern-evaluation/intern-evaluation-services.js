class InternEvaluationService {

    constructor(connection) {
        this.connection = connection;
    }

    rate(internEvaluation) {
        return this.connection('rates').update({
            intern_id : internEvaluation.code,
            internship_id : internEvaluation.internship_id,
            first_point : internEvaluation.first_point,
            lecture_point : internEvaluation.lecture_point,
            company_point : internEvaluation.company_point,
            council_point : internEvaluation.council_point,
            finale_point : internEvaluation.finale_point,
        });
    }

    add(rawBody) {
        return this.connection('rates').insert({
            intern_id : rawBody.code,
            internship_id: rawBody.internship_id
        });
    }

    all(){
        return this.connection.select('interns.code',
            'interns.firstName',
            'interns.lastName',
            'rates.first_point',
            'rates.lecture_point',
            'rates.company_point',
            'rates.council_point',
            'rates.finale_point')
            .from('rates').join('interns', function(){
            this.on('interns.code','=','intern_id')
        });
    }

    getHighCore(){
        return this.connection('rates').orderBy('final','desc').limit(10);
    }
}

module.exports = InternEvaluationService;
