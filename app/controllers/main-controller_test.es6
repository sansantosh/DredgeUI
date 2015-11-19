/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('MainCtrl', () => {
  let ctrl;

  beforeEach(module('dredge'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('MainCtrl');
  }));

  it('should have ctrlName as MainCtrl', () => {
    expect(ctrl.ctrlName).toEqual('MainCtrl');
  });
});
