'use strict';

const Path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Helpers = require('./helpers');
const Package = require('../package.json');
const Config = require('./config');

/**
 * Define Registry module
 */
const Registry = {};

/**
 * Define relative paths
 * to the plugin directory
 * starting by the repo
 * location.
 */
Registry.pluginDirs = [
  'plugins'
];

/**
 * Define relative paths
 * to the controller directory
 * starting by the repo
 * location.
 */
Registry.controllerDirs = [
  'controllers'
];

/**
 * Define relative paths
 * to the model directory
 * starting by the repo
 * location.
 */
Registry.modelDirs = [
  'models'
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
  Registry.controllerDirs.forEach(async (controllerPath) => {

    // get controller's absolute path
    const dirPath = Path.resolve(__dirname, '..', controllerPath);
    const filePaths = await Helpers.listModules(dirPath);

    filePaths.forEach((modulePath) => {
      // load controller
      const controller = require(`${dirPath}/${modulePath}`);

      // subscribe controller
      server.route(Object.values(controller));
      console.info('controller subscribed', modulePath);
    });
  });
}

/**
 * Registers all Plugins found in the expected
 * places defined by pluginDirs.
 * 
 * @param {Server} server HapiJS Server
 */
Registry.subscribePlugins = async (server) => {

  /**
   * Load all controllers found in expected paths
   */
  Registry.pluginDirs.forEach(async (pluginPath) => {

    // get controller's absolute path
    const dirPath = Path.resolve(__dirname, '..', pluginPath);
    const filePaths = await Helpers.listModules(dirPath);

    filePaths.forEach(async (pluginPath) => {
      // load plugin
      const plugin = require(`${dirPath}/${pluginPath}`);

      // subscribe plugin
      await server.register(plugin);
      console.info('plugin subscribed', pluginPath);
    });
  });
}

Registry.subscribeArchitecturePlugins = async (server) => {
  const swaggerOptions = {
    host: 'api.localhost',
    info: {
      title: `${Package.name} API`,
      version: Package.version
    },
  };
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);
};

module.exports = Registry;