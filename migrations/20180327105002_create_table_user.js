exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.string('user_name').primary();
        table.string('password').notNull();
        table.string('code');
        table.string('avatar');
        table.string('email').notNull();
        table.string('status');
        table.string('role');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
