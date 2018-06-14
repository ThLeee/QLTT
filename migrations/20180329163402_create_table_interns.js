exports.up = function(knex) {
    return knex.schema.createTable('interns', function (table) {
        table.string('code').primary();
        table.string('lastName').notNull();
        table.string('firstName').notNull();
        table.string('gender');
        table.string('dateOfBirth');
        table.string('idCard');
        table.string('issued');
        table.string('provide');
        table.string('phone');
        table.string('phoneParent');
        table.string('email');
        table.string('address');
        table.string('deleted_at');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('interns');
};
