exports.up = function(knex, Promise) {
    return knex.schema.table('councils', (table)=> {
        table.string('internship_name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('councils', (table)=> {
        table.dropColumn('internship_name');
    })
};
