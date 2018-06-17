'use strict';

const Package = require('../package.json');
const Config = require('../lib/config');

let controllers = {};

controllers.health = {
  method: 'GET',
  path: '/health',
  config: {
    description: 'shows information about the application',
    tags: ['api'],
    handler: (request, h) => {
      return {
        name: Package.name,
        version: Package.version,
        env: Config.env
      };
    }
  }
};

module.exports = controllers;
