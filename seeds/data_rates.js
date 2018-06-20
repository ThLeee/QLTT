exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rates').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rates').insert([
        { intern_id : '1400657', first_point: 8.5 ,lecture_point:8.5, company_point:8.5 , council_point:8.5 , finale_point: 8.5 , internship_id : 1 },
        { intern_id : '1400658', first_point: 8.5 ,lecture_point:4.5, company_point:3.5 , council_point:6.5 , finale_point: 7.5 , internship_id : 1 },
        { intern_id : '1400659', first_point: 8.5 ,lecture_point:8.5, company_point:8.5 , council_point:8.5 , finale_point: 6.5 , internship_id : 1 },
        { intern_id : '1400660', first_point: 7.5 ,lecture_point:8.5, company_point:8.5 , council_point:9.5 , finale_point: 8.5 , internship_id : 1 },
        { intern_id : '1400661', first_point: 8.5 ,lecture_point:8.5, company_point:8.5 , council_point:8.5 , finale_point: 8.5 , internship_id : 1 },
      ]);
    });
};
