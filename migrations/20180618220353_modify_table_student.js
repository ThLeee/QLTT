exports.up = function(knex, Promise) {
    return knex.schema.table('student', (table) => {
        table.string('phoneParent');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('student', (table) => {
        table.dropColumn('phoneParent');
    });
};
