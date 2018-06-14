exports.up = function(knex) {
  return knex.schema.createTable('internships', function (table) {
      table.increments('id');
      table.string('course_id');
      table.string('lecturer_code');
      table.string('company_id');
      table.string('deadline');
      table.string('status');
      table.string('deleted_at');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('internships');
};
