'use strict';

const Package = require('../package.json');
const Config = require('../lib/config');

let controllers = {};

/**
 * Definition of home API endpoint
 * 
 * @param  {} request
 * @param  {} h
 * @param  {Package.name} =>{return{name
 * @param  {Package.version} version
 * @param  {Config.env};}};} env
 * @returns Config
 */
controllers.about = {
  method: 'GET',
  path: '/',

  /**
   * Controller handler that retrieves server information
   * 
   * @param  {} request HapiJS request object
   * @param  {} h HapiJS response toolkit
   */
  handler: (request, h) => {
    return {
      name: Package.name,
      version: Package.version,
      env: Config.env
    };
  }
};

module.exports = controllers;
