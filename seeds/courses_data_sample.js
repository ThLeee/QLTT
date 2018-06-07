
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        {id: 1, name :'ky 1 nam 2017', startDate: '2017-01-01',endDate :'2017-05-11', status :"OPEN"},
        {id: 2, name :'ky 2 nam 2017', startDate: '2017-01-25',endDate :'1996-04-25', status:'OPEN'},
        {id: 3, name :'ky 1 nam 2018', startDate: '1998-02-15',endDate :'1996-05-15', status: 'OPEN'},
        {id: 4, name :'ky 2 nam 2018', startDate: '1998-02-20',endDate :'1996-05-20', status: 'CLOSE'},
        {id: 5, name :'ky 1 nam 2019', startDate: '1998-02-20',endDate :'1996-05-20', status: 'CLOSE'},
        {id: 6, name :'ky 2 nam 2019', startDate: '1998-02-20',endDate :'1996-05-20', status: 'CLOSE'},
        {id: 7, name :'ky 1 nam 2020', startDate: '1998-02-20',endDate :'1996-05-20', status: 'CLOSE'},
        {id: 8, name :'ky 2 nam 2020', startDate: '1998-02-20',endDate :'1996-05-20', status: 'CLOSE'},
        {id: 9, name :'ky 1 nam 2021', startDate: '1998-02-20',endDate :'1996-05-20', status: 'CLOSE'},
        {id: 10, name :'ky 2 nam 2021', startDate: '1998-02-20',endDate :'1996-05-20', status: 'CLOSE'},
      ]);
    });
};
