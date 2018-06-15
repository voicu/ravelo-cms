'use strict';

const mongoose = require('../init/mongoose_connection');

/**
 * @param  {String} email
 */
const Schema = new mongoose.Schema({
  email: String
});

/**
 * User schema definition using monggoose
 * 
 * @param  {} 'User'
 * @param  {} Schema
 */
const UserModel = mongoose.model('User', Schema);

module.exports = UserModel;
