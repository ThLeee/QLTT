exports.up = function(knex) {
    return knex.schema.createTable('councils', (table)=> {
        table.increments('id');
        table.integer('internship_id');
        table.integer('lecture_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('councils');
};
