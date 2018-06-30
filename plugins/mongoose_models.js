'use strict';

const Path = require('path');
const Helpers = require('../lib/helpers');
const Registry = require('../lib/registry');
const Config = require('../lib/config');

/**
 * This plugin will register all models
 * available to the application
 */
exports.plugin = {
  name: 'models',
  version: '0.0.1',
  register: (server) => {

    if (Config.env !== 'test') {

      let models = {};

      Registry.modelDirs.forEach(async (modelPath) => {

        // get controller's absolute path
        const dirPath = Path.resolve(__dirname, '..', modelPath);
        const filePaths = await Helpers.listModules(dirPath);
    
        filePaths.forEach((modulePath) => {
          // load controller
          const model = require(`${dirPath}/${modulePath}`);
    
          // subscribe controller
          models[model.modelName] = model;
          console.info('controller subscribed', model.modelName);
        });
      });

      server.expose('models', models);
    }
  }
};