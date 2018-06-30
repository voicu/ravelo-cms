'use strict';

const Lab = require('lab');
const expect = require('code').expect;
const { suite, test, before } = exports.lab = Lab.script();
const Package = require('../../../package.json');

const HealthCtr = require('../../../controllers/health');

suite('health', () => {

  let sut; // system under testing

  before(async () => {

    const Server = await require('../../../server');

    // prepare request to test controller action
    const request = {
      method: HealthCtr.health.method,
      url: HealthCtr.health.path
    };

    // testrequest
    sut = await Server.inject(request);
  });

  test('returns successful response', () => {

    expect(sut.statusCode).to.equal(200);
  });

  test('contains the app name', () => {

    expect(sut.result.name).to.equal(Package.name);
  });

  test('contains the app version', () => {

    expect(sut.result.version).to.equal(Package.version);
  });
});
