'use strict';

const Lab = require('lab');
const expect = require('code').expect;
const { suite, test, before } = exports.lab = Lab.script();
const Hapi = require('hapi');
const Package = require('../../package.json');

const Server = require('../../server');
const AboutCtr = require('../../controllers/about');

suite('About', () => {

  let sut; // system under testing

  before(async () => {

    // prepare request to test controller action
    const request = {
      method: AboutCtr.about.method,
      url: AboutCtr.about.path
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
