/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('HomeCtrl', () => {
  let ctrl;

  beforeEach(module('dredge'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('HomeCtrl');
  }));

  it('should have ctrlName as HomeCtrl', () => {
    expect(ctrl.ctrlName).toEqual('HomeCtrl');
  });
});
