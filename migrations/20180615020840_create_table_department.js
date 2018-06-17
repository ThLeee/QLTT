exports.up = function(knex) {
    return knex.schema.createTable('departments', function (table) {
        table.charset('utf8');
        table.increments('id');
        table.string('department_code').notNull();
        table.string('name');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('departments');
};
