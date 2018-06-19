const Uploader = require('./uploader');
const fs = require('fs');

let uploader = new Uploader(fs);

uploader.setDirectory('public/upload/');
uploader.setPathTemplate('upload/');

module.exports = uploader;
