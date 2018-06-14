exports.up = function(knex) {
    return knex.schema.createTable('companies', function (table) {
        table.increments('id');
        table.string('name').notNull();
        table.string('phoneManager');
        table.string('emailManager');
        table.string('address');
        table.string('nameManager');
        table.string('deleted_at');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('companies');
};
