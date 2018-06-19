exports.up = function(knex, Promise) {
    return knex.schema.table('interns', (table)=> {
        table.integer('area_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('interns', (table)=> {
        table.dropColumn('area_id');
    });
};
