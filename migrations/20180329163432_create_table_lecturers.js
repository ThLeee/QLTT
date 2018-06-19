exports.up = function(knex) {
    return knex.schema.createTable('lecturers', function (table) {
        table.string('code');
        table.string('name').notNull();
        table.string('gender');
        table.string('phone');
        table.string('email');
        table.string('address');
        table.integer('department_id');
        table.string('deleted_at');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('lecturers');
};
