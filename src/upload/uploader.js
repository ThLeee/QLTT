const moment = require('moment');

class Uploader {
    
    constructor(fs) {
        this.fs = fs;
    }

    setDirectory(uploadDirectory) {
        this.uploadDirectory = uploadDirectory;
        return this;
    }

    setPathTemplate(pathTemplate) {
        this.pathTemplate = pathTemplate;
    }

    uploadFile(file) {
        let filename = moment().unix() +"-"+ randomstring.generate() +'.png';
        this.fs.renameSync(file.path, this.uploadDirectory + filename);
        file.path = this.pathTemplate + filename;
        return file;
    }
}

module.exports = Uploader;
