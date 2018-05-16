
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username : '1', password : '12345', role : 'STUDENT' , archived_at : null},
        {username : '2', password : '12345', role : 'LECTURER' , archived_at : null},
        {username : '3', password : '12345', role : 'ADMIN' , archived_at : null},
      ]);
    });
};
