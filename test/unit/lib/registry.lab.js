'use strict';

const Lab = require('lab');
const expect = require('code').expect;
const { suite, test, before } = exports.lab = Lab.script();
const Hapi = require('hapi');

const Registry = require('../../../lib/registry');

suite('Registry', () => {

  let sut; // system under testing

  before(() => {

    sut = Registry;
  });

  suite('.registerControllers', () => {

    test('contains a list of valid locations', () => {

      expect(Registry.controllerDirs).to.equal(['controllers']);
    });

    test('subscribes controllers', () => {

      const server = Hapi.server();

      try {
        Registry.subscribeControllers(server);
      } catch (e) {
        fail('controller subscription should not throw an error');
      }
    });
  });

  suite('.registerModels', () => {

    test('contains a list of valid locations', () => {

      expect(Registry.modelDirs).to.equal(['models']);
    });

    // test('subscribes models', () => {

    //   const server = Hapi.server();

    //   try {
    //     Registry.subscribeControllers(server);
    //   } catch (e) {
    //     fail('controller subscription should not throw an error');
    //   }
    // });
  });
});
