exports.up = function(knex) {
    return knex.schema.createTable('profile', (table) => {
        table.charset('utf8');
        table.increments('id');
        table.string('email');
        table.string('name');
        table.string('gender');
        table.string('nation');
        table.string('religion');
        table.date('date_of_birth');
        table.string('birth_place');
        table.string('current_address');
        table.string('identification');
        table.string('avatar');
        table.integer('credential_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('profile');
};
