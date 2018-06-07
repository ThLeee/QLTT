
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('registrations').del()
    .then(function () {
      // Inserts seed entries
      return knex('registrations').insert([
        {id: 1, intern_code: '1400657', internship_id:'1',lecturer_code : 'DHCNVH1', status : 'PENDING'},
        {id: 2, intern_code: '1400658', internship_id:'1',lecturer_code : 'DHCNVH1', status : 'CONFIRMED'},
        {id: 3, intern_code: '1400659', internship_id:'1',lecturer_code : 'DHCNVH1', status : 'PENDING'},
        {id: 4, intern_code: '1400660', internship_id:'1',lecturer_code : 'DHCNVH1', status : 'PENDING'},
        {id: 5, intern_code: '1400661', internship_id:'1',lecturer_code : 'DHCNVH1', status : 'CONFIRMED'},
        {id: 6, intern_code: '1400662', internship_id:'1',lecturer_code : 'DHCNVH1', status : 'PENDING'},
        {id: 7, intern_code: '1400663', internship_id:'1',lecturer_code : 'DHCNVH1', status : 'CONFIRMED'},
        {id: 8, intern_code: '1400664', internship_id:'2',lecturer_code : 'DHCNVH2', status : 'PENDING'},
        {id: 9, intern_code: '1400665', internship_id:'2',lecturer_code : 'DHCNVH2', status : 'CONFIRMED'},
        {id: 10, intern_code: '1400666', internship_id:'2',lecturer_code : 'DHCNVH2', status : 'PENDING'},
        {id: 11, intern_code: '1400667', internship_id:'2',lecturer_code : 'DHCNVH2', status : 'CONFIRMED'},
        {id: 12, intern_code: '1400668', internship_id:'2',lecturer_code : 'DHCNVH2', status : 'PENDING'},
        {id: 13, intern_code: '1400669', internship_id:'2',lecturer_code : 'DHCNVH2', status : 'CONFIRMED'},
      ]);
    });
};
