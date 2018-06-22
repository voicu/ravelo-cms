'use strict';

/**
 * Define imports
 */
const Hapi = require('hapi');
const Registry = require('./lib/registry');
const Config = require('./lib/config');

/**
 * Prepare the hapi server
 * 
 * @returns {Server} HapiJS server
 */
const setup = async () => {
  const server = Hapi.server({
    port: Config.server.port,
    host: Config.server.host
  });

  await Registry.subscribeArchitecturePlugins(server);
  await Registry.subscribePlugins(server);
  await Registry.subscribeControllers(server);

  /**
   * We only want to run the server when loaded through the cli.
   * When testing, we just want to use the server as a module.
   */
  /* $lab:coverage:off$ */
  if (require.main === module) {
    try {
      await server.start();
      console.log('Server running at:', server.info.uri);
    } catch(err) {
        console.log(err);
    }
  }
  /* $lab:coverage:on$ */
  return server;
}

/**
 * export server configuration for testing purposes
 */
module.exports = setup();