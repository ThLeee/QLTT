const InternshipResgis = require('./internship-registration-service');
const  connect = require('../../database/connection');
let internship = new InternshipResgis(connect);

(async ()=>{
    let result = await internship.confirm(1400660, 1);
    console.log(result);
})();