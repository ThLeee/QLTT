exports.up = function(knex) {
    return knex.schema.createTable('student', function (table) {
        table.charset('utf8');
        table.increments('id');
        table.string('school_year');
        table.string('class');
        table.string('major');
        table.string('location');
        table.string('status');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('student');
};
