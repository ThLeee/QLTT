
exports.up = function(knex, Promise) {
    return knex.schema.table('councils', function (table) {
       table.dropColumn('internship_name');
       table.string('company_name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('councils', function (table) {
        table.dropColumn('company_name');
        table.string('internship_name');
    });
};
