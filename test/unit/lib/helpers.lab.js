'use strict';

const Path = require('path');
const Lab = require('lab');
const expect = require('code').expect;
const { suite, test, before } = exports.lab = Lab.script();
const Helpers = require('../../../lib/helpers');

suite('Helpers', () => {

  suite('.listModules', () => {

    const sut = Helpers.listModules;

    test('lists module files in a path', async () => {

      const _path = Path.resolve(__dirname, '../../fixtures/fake-controllers');
      expect(await sut(_path)).to.equal(['fake-controller.js']);
    });

    test('throws an error for invalid module paths', async () => {

      const _path = '/invalid-path';
      try {
        await sut(_path);
      } catch (e) {
        expect(e.message).to.equal(`Module does not exist: ${_path}`);
      }
    });
  });
});
