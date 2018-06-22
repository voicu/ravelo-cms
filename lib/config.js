'use strict';

const Path = require('path');

/**
 * Grabs the environment from the
 * NODE_ENV environment variable.
 * Valid environments are:
 *  - production
 *  - development
 *  - test
 * 
 * Throws an error if environment
 * value is invalid.
 * 
 * @returns {String} name of environment
 */
const getEnv = () => {
  const env = process.env.NODE_ENV;
  switch (env) {
    case 'development':
    case 'test':
      return env;
    default:
      throw Error('Invalid configuration environment');
      break;
  }
}

/**
 * Gets the configuration options
 * for the runtime environment.
 * 
 * @uses getEnv()
 * @param  {String} env=getEnv() name of environment
 */
const getConfig = (env = getEnv()) => {
  const envPath = Path.resolve(__dirname, `../config/${env}.app.json`);
  const config = require(envPath);
  config.env = env;

  if( process.env.PORT !== undefined ) {
    config.server.port = process.env.PORT
  }

  if( process.env.HOST !== undefined ) {
    config.server.host = process.env.HOST
  }

  return config;
};

/**
 * By default we want to return an object with
 * environment specific configuration options
 */
module.exports = getConfig();


/**
 * Expose functions to the module.
 */
module.exports.getEnv = getEnv;
module.exports.getConfig = getConfig;
