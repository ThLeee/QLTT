exports.up = function(knex) {
    return knex.schema.createTable('councils', (table)=> {
        table.increments('id');
        table.string('name');
        table.integer('internship_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('councils');
};
