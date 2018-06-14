exports.up = function(knex) {
    return knex.schema.createTable('credentials', (table) => {
        table.increments('id');
        table.string('code').notNullable();
        table.string('password').notNullable();
        table.string('role').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('credentials');
};
