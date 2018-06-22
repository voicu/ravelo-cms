'use strict';

const Path = require('path');
const Lab = require('lab');
const expect = require('code').expect;
const { suite, test, before } = exports.lab = Lab.script();

suite('Server', () => {

  let sut; // system under testing

  test('can be configured to run on a different port', async () => {
    const default_port = process.env.PORT;
    process.env.PORT = 3333;
    
    const configPath = Path.resolve(__dirname, '../lib/config.js');
    delete require.cache[configPath];

    const serverPath = Path.resolve(__dirname, '../server.js');
    delete require.cache[serverPath];

    const Server = await require('../server');

    expect(Server.info.port).to.equal(Number(process.env.PORT));

    process.env.PORT = default_port;
  });
});
