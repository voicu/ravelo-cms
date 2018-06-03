'use strict';

/**
 * Define imports
 */
const Hapi = require('hapi');
const Registry = require('./lib/registry');
const config = require('./config.json');

/**
 * Setup server
 */
const server = Hapi.server({
  port: config.server.port,
  host: config.server.host
});

/**
 * Subscribe controllers
 */
Registry.subscribeControllers(server);

/* $lab:coverage:off$ */
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