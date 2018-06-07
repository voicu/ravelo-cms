'use strict';

/**
 * Define imports
 */
const Hapi = require('hapi');
const Registry = require('./lib/registry');
const Config = require('./lib/config');

/**
 * Setup server
 */
const server = Hapi.server({
  port: Config.server.port,
  host: Config.server.host
});

/* $lab:coverage:off$ */
/**
 * TODO: We need to have circle ci
 * run a mongodb instance before
 * running this
 */
if(Config.env !== 'test') {

  /**
   * Subscribe plugins
   */
  Registry.subscribePlugins(server);

}

/**
 * Subscribe controllers
 */
Registry.subscribeControllers(server);

/**
 * this function is designed to simply run
 * the server. Everything within it
 * will not be included when the server is
 * loaded as a module.
 */
const runServer = async () => {

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

/**
 * We only want to run the server when loaded through the cli.
 * When testing, we just want to use the server as a module.
 */
if (require.main === module) {
  runServer();
}
/* $lab:coverage:on$ */

/**
 * export server configuration for testing purposes
 */
module.exports = server;