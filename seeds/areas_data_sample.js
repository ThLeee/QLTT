
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('areas').del()
    .then(function () {
      // Inserts seed entries
      return knex('areas').insert([
        {id: 1, name: 'rowValue1', company_id : '1'},
        {id: 2, name: 'rowValue2', company_id : '2'},
        {id: 3, name: 'rowValue3', company_id : '3'},
      ]);
    });
};
