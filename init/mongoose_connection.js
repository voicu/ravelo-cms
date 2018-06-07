'use strict';

const Config = require('../lib/config');
const mongoose = require('mongoose');

mongoose.connect(Config.mongoose);

module.exports = mongoose;
