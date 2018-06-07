
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('lecturers').del()
        .then(function () {
            // Inserts seed entries
            return knex('lecturers').insert([
                {code : 'DHCNVH1', name: 'mai', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {code : 'DHCNVH2', name: 'hoa', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {code : 'DHCNVH3', name: 'kim', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {code : 'DHCNVH4', name: 'nga', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
            ]);
        });
};
