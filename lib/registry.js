'use strict';

const Path = require('path');
const Helpers = require('./helpers');

/**
 * Define Registry module
 */
const Registry = {};

/**
 * Define relative paths
 * to the controller folder
 * starting by the repo
 * location.
 */
Registry.controllerPaths = [
  'controllers'
];

/**
 * Registers Controllers
 * 
 * @param {Server} server HapiJS Server
 */
Registry.subscribeControllers = async (server) => {

  /**
   * Load all controllers found in expected paths
   */
  Registry.controllerPaths.forEach(async (controllerPath) => {

    // get controller's absolute path
    const dirPath = Path.resolve(__dirname, '..', controllerPath);
    const modulePaths = await Helpers.listModules(dirPath);
    modulePaths.forEach((modulePath, actionId) => {
      // load module
      const module = require(`${dirPath}/${modulePath}`);

      // subscribe controller
      server.route(Object.values(module));
      console.info('controller action subscribed', actionId);
    });
  });
}

module.exports = Registry;