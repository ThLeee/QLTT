const express         = require('express');
const path            = require('path');
const bodyParser      = require('body-parser');
const cors            = require('cors');

module.exports =function (app) {
    app.use(express.static(path.join('public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.use(express.static(path.join(__dirname, 'public')));
};
