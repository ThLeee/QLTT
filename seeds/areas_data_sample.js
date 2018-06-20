
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('areas').del()
    .then(function () {
      // Inserts seed entries
      return knex('areas').insert([
        {id: 1, name: 'Cơ sở 1',address : 'Hà Nội ', company_id : '1'},
        {id: 2, name: 'Cơ sở 2',address : 'Vĩnh Phúc', company_id : '2'},
        {id: 3, name: 'Cơ sở 3',address : 'Vĩnh Yên', company_id : '3'},
        {id: 4, name: 'Cơ sở 4',address : 'Lai Châu', company_id : '3'},
      ]);
    });
};
