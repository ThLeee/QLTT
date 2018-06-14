exports.up = function(knex) {
    return knex.schema.createTable('areas', function (table) {
        table.increments('id');
        table.string('name');
        table.string('address');
        table.string('company_id');
        table.string('deleted_at');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('areas');
};
