const express         = require('express');
const session         = require('express-session');
const path            = require('path');
const bodyParser      = require('body-parser');
const router          = require('../router/router');
const cors            = require('cors');

module.exports =function (app) {
    let options = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATA
    };

    let sessionStore = new MySQLStore(options);
    app.use(session({
        key : 'session_key',
        secret : 'bibi',
        store  : sessionStore,
        resave : false,
        saveUninitialized : false
    }));

    app.use(express.static(path.join('public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/', router);

};
