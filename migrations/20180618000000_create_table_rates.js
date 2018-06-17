exports.up = function(knex) {
    return knex.schema.createTable('rates', (table) => {
        table.increments('id');
        table.integer('lecture_id');
        table.integer('intern_id');
        table.float('first_point');
        table.float('lecture_point');
        table.float('company_point');
        table.float('council_point');
        table.float('finale_point');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('rates');
};
