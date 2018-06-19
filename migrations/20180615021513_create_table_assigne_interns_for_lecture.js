exports.up = function(knex) {
        return knex.schema.createTable('assignee_lectures', function (table) {
        table.increments('id');
        table.integer('intern_id');
        table.integer('lecture_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('assignee_lectures');
};
