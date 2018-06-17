exports.up = function(knex) {
    return knex.schema.table('rates', (table) => {
        table.integer('internship_id');
    });
};

exports.down = function(knex) {
    return knex.schema.table('rates', (table) => {
        table.dropColumn('internship_id');
    })
};
