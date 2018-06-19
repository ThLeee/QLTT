
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('council_lectures').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('council_lectures').insert([
        {council_id: 1 , lecture_id : 'DHCNVH1' ,position : 'Chủ tịch'},
        {council_id: 1 , lecture_id : 'DHCNVH2' , position : 'Thư Ký'},
        {council_id: 1 , lecture_id : 'DHCNVH3', position : 'Thư Ký' },
      ]);
    });
};
