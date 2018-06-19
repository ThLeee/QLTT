
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('councils').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('councils').insert([
        { name : 'rowValue1' , internship_id : 1},
        { name : 'rowValue1' , internship_id : 1},
        { name : 'rowValue1' , internship_id : 1},
      ]);
    });
};
