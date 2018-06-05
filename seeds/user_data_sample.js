
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    user_name: 'leminhthuy', password: '$2b$10$lPlpLlOw.18Aj4Ro9egjSuVqL4UCOr3gm25TC5RYsyCrIKteR7uUG',
                    avatar: 'http://www.1999.co.jp/itbig48/10485758.jpg',
                    email: 'sanglv@sphinx-software.com', role: 'admin'},
                {
                    user_name: 'dinhtienduc', password: '$2b$10$lPlpLlOw.18Aj4Ro9egjSuVqL4UCOr3gm25TC5RYsyCrIKteR7uUG',
                    avatar: 'http://www.1999.co.jp/itbig48/10485758.jpg',
                    email: 'sanglv@sphinx-software.com'}
            ]);
        });
};
