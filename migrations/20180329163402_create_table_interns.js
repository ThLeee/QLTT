exports.up = function(knex) {
    return knex.schema.createTable('interns', function (table) {
        table.increments('id');
        table.integer('company_id');
        table.string('position');
        table.string('gender');
        table.string('issued');
        table.integer('student_id');
        table.string('deleted_at');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('interns');
};
