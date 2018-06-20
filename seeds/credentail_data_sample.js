
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('credentials').del()
    .then(function () {
      // Inserts seed entries
      return knex('credentials').insert([
        {id: 1, code: '1400659', password : '$2a$10$qi2ioQpBM2PZsSXVWnSXA.mYu3JQ6VzrcwF4w8mJpRpoClnem3Yha', role : 'intern'},
        {id: 2, code: 'DHCNVH1', password : '$2a$10$qi2ioQpBM2PZsSXVWnSXA.mYu3JQ6VzrcwF4w8mJpRpoClnem3Yha', role : 'lecturer'},
        {id: 3, code: 'adminManagement', password : '$2a$10$qi2ioQpBM2PZsSXVWnSXA.mYu3JQ6VzrcwF4w8mJpRpoClnem3Yha', role : 'admin'},
        {id: 4, code: '1401532', password : '$2a$10$qi2ioQpBM2PZsSXVWnSXA.mYu3JQ6VzrcwF4w8mJpRpoClnem3Yha', role : 'intern'},
      ]);
    });
};
