exports.up = function(knex) {
    return knex.schema.createTable('credentials', (table) => {
        table.string('code');
        table.string('password');
        table.string('role');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('credentials');
};
