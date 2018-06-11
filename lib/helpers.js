'use strict';

const Path = require('path');
const Fs = require('fs');
const Config = require('../lib/config');

const Helpers = {};

/**
 * Receives a path in string format and returns a
 * list of strings which references a list of
 * modules (file paths) within it.
 * 
 * eg.
 * 
 *    const lst = Helpers.listModules('/home/controllers');
 *    // lst == [
 *    //   '/home/controllers/home.js',
 *    //   '/home/controllers/about.js'
 *    // ]
 * 
 * @param {string} path to the directory
 * @returns {string[]} list of files with a path
 */
Helpers.listModules = async (path) => {
  let modules = 'test';

  if ( !Fs.existsSync(path) ) {
    console.error('Invalid Pth', path);
    throw Error(`Module does not exist: ${path}`);
  }
  // load modules in said path
  modules = Fs.readdirSync(path);

  // remove unwanted module files
  return modules.filter(module => Config.unwantedModules.indexOf(module) == -1);
};

module.exports = Helpers;