
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('councils').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('councils').insert([
        { name : 'Hội đồng 1' , internship_id : 1},
        { name : 'Hội đồng 2' , internship_id : 2},
        { name : 'Hội đồng 3' , internship_id : 3},
      ]);
    });
};
