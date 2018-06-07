
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('companies').del()
        .then(function () {
            // Inserts seed entries
            return knex('companies').insert([
                {id: 1, name: 'FPT', phoneManager: '03423423', emailManager :'jack@', address : 'HN', nameManager : 'Mr.Tien'},
                {id: 2, name: 'SAMSUNG', phoneManager: '03423423', emailManager :'jack@', address : 'HN', nameManager : 'Mr.Toan'},
                {id: 3, name: 'Sphinx', phoneManager: '03423423', emailManager :'jack@', address : 'HN', nameManager : 'Mr.Son'},
                {id: 4, name: 'APTEXT', phoneManager: '03423423', emailManager :'jack@', address : 'HN', nameManager : 'Mr.Son'},
                {id: 5, name: 'VIRGO', phoneManager: '03423423', emailManager :'jack@', address : 'HN', nameManager : 'Mr.Son'},
                {id: 6, name: 'HOANGLONG', phoneManager: '03423423', emailManager :'jack@', address : 'HN', nameManager : 'Mr.Son'},
                {id: 7, name: 'KIMHOANG', phoneManager: '03423423', emailManager :'jack@', address : 'HN', nameManager : 'Mr.Son'},
            ]);
        });
};
