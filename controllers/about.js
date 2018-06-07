'use strict';

const Package = require('../package.json');
const Config = require('../lib/config');

let controllers = {};

controllers.about = {
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return {
      name: Package.name,
      version: Package.version,
      env: Config.env
    };
  }
};

module.exports = controllers;
