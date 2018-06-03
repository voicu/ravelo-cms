'use strict';

const Package = require('../package.json');
let controllers = {};

controllers.about = {
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return {
      name: Package.name,
      version: Package.version
    };
  }
};

module.exports = controllers;
