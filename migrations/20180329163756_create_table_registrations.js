exports.up = function(knex) {
  return knex.schema.createTable('registrations', function (table) {
      table.charset('utf8');
      table.increments('id');
      table.string('intern_code').notNull();
      table.string('internship_id').notNull();
      table.string('lecturer_code');
      table.string('status');
      table.datetime('deleted_at');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('registrations');
};
