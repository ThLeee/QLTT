const EncoderServices = require('./encoder.services');
const bcrypt = require('bcryptjs');

let encoderServices = new EncoderServices(bcrypt).setSaltRounds(10);

module.exports = encoderServices;
