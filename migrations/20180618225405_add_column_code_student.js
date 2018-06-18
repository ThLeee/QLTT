exports.up = function(knex) {
    return knex.schema.table('student', function (table) {
        table.string('code');
    });
};

exports.down = function(knex) {
    return knex.schema.table('student', function (table) {
        table.dropColumn('code');
    });
};
