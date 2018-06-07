
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('interns').del()
        .then(function () {
            // Inserts seed entries
            return knex('interns').insert([
                {code : '1400657', lastName: 'mai',firstName: 'dao', gender : 'male', phone: '03423423', phoneParent:'01222', email :'jack@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi" },
                {code : '1400658', lastName: 'hoa',firstName: 'tap', gender : 'female', phone: '03423423', phoneParent:'01222', email :'abc@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400659', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400660', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400661', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400662', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400663', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400664', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400665', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400666', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400667', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400668', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
                {code : '1400669', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN', idCard : "017290506",dateOfBirth : '1996-01-01',issued : "2014-01-01", provide : "Ha noi"},
            ]);
        });
};
