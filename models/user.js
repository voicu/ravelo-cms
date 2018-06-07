'use strict';

const mongoose = require('../init/mongoose_connection');

const Schema = new mongoose.Schema({
  email: String
});

const UserModel = mongoose.model('User', Schema);

module.exports = UserModel;
