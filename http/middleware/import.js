let XLSX = require('xlsx');
module.exports = function (request, response, next) {
    let workbook = XLSX.readFile('/home/tien/WebstormProjects/books/xlsx1.xlsx');
    let sheet_name_list = workbook.SheetNames;

    let data = [];
    sheet_name_list.forEach(function(y) {
        let worksheet = workbook.Sheets[y];
        let headers = {};
        for(z in worksheet) {
            if(z[0] === '!') continue;
            let col = z.substring(0,1);
            let row = parseInt(z.substring(1));
            let value = worksheet[z].v;
            if(row === 1) {
                headers[col] = value;
                continue;
            }
            if(!data[row]) data[row]={};
            data[row][headers[col]] = value;
        }
    });
    request.dataImport = data;
    next();
};