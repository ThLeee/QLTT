
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table) {
        table.string('username').primary();
        table.string('password').notNull();
        table.string('role');
        table.date('archived_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
