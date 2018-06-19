exports.up = function(knex) {
    return knex.schema.createTable('council_lectures', function (table) {
        table.increments('id');
        table.integer('council_id');
        table.integer('lecture_id');
        table.string('position');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('council_lectures');
};
