'use strict';

const Package = require('../package.json');
const Config = require('../lib/config');

let controllers = {};

controllers.health = {
  method: 'GET',
  path: '/health',
  handler: (request, h) => {
    return {
      name: Package.name,
      version: Package.version,
      env: Config.env
    };
  }
};

module.exports = controllers;
