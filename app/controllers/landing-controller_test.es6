/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LandingCtrl', () => {
  let ctrl;

  beforeEach(module('dredge'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('LandingCtrl');
  }));

  it('should have ctrlName as LandingCtrl', () => {
    expect(ctrl.ctrlName).toEqual('LandingCtrl');
  });
});
