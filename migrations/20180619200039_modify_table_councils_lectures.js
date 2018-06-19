exports.up = function(knex, Promise) {
    return knex.schema.alterTable('council_lectures', (table) => {
        table.string('lecture_id').alter();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('council_lectures', (table) => {
        table.integer('lecture_id').alter();
    });
};
