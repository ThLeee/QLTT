exports.up = function(knex, Promise) {
    return knex.schema.alterTable('rates', (table) =>{
        table.dropColumn('lecture_id');
        table.string('intern_id').alter();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('rates', (table) =>{
        table.integer('lecture_id');
        table.integer('intern_id').alter();
    });
};
