exports.up = function(knex, Promise) {
    return knex.schema.alterTable('registrations', (table) => {
        table.string('deleted_at').alter();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('registrations', (table) => {
        table.datetime('deleted_at').alter();
    });
};
