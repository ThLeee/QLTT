
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('internships').del()
    .then(function () {
      // insertships seed entries
      return knex('internships').insert([
        {id: 1, course_id: '1', lecturer_code :'DHCNVH1',deadline : '2019-01-01',status : "OPEN", company_id: '1'},
        {id: 2, course_id: '1', lecturer_code :'DHCNVH1',deadline : '2019-01-01',status : "OPEN",  company_id: '2'},
        {id: 3, course_id: '1', lecturer_code :'DHCNVH1',deadline : '2019-01-01',status : "OPEN",  company_id: '3'},
        {id: 4, course_id: '1', lecturer_code :'DHCNVH1',deadline : '2019-01-01',status : "OPEN",  company_id: '4'},
        {id: 5, course_id: '1', lecturer_code :'DHCNVH1',deadline : '2019-01-01',status : "OPEN",  company_id: '5'},
        {id: 6, course_id: '1', lecturer_code :'DHCNVH1',deadline : '2019-01-01',status : "OPEN",  company_id: '6'},
        {id: 8, course_id: '2', lecturer_code :'DHCNVH2',deadline : '2019-01-01',status : "OPEN",  company_id: '1'},
        {id: 9, course_id: '2', lecturer_code :'DHCNVH2',deadline : '2019-01-01',status : "OPEN",  company_id: '2'},
        {id: 10, course_id: '2', lecturer_code :'DHCNVH2',deadline : '2019-01-01',status : "OPEN",  company_id: '3'},
        {id: 11, course_id: '2', lecturer_code :'DHCNVH2',deadline : '2019-01-01',status : "OPEN",  company_id: '4'},
        {id: 12, course_id: '2', lecturer_code :'DHCNVH2',deadline : '2019-01-01',status : "OPEN",  company_id: '5'},
        {id: 13, course_id: '2', lecturer_code :'DHCNVH2',deadline : '2019-01-01',status : "OPEN",  company_id: '6'},
      ]);
    });
};
