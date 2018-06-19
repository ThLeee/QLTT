
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('profile').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('profile').insert([
                {
                    name: 'leminhthuy',
                    avatar: 'http://www.1999.co.jp/itbig48/10485758.jpg',
                    email: 'sanglv@sphinx-software.com',
                    gender: 'nam',
                    credential_id : 1
                },
                {
                    name: 'leminhthuy2',
                    avatar: 'http://www.1999.co.jp/itbig48/10485758.jpg',
                    email: 'sanglv@sphinx-software.com',
                    gender: 'nam',
                    credential_id : 2
                },
            ]);
        });
};
