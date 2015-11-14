/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TaskCtrl', () => {
  let ctrl;

  beforeEach(module('dredge'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('TaskCtrl');
  }));

  it('should have ctrlName as TaskCtrl', () => {
    expect(ctrl.ctrlName).toEqual('TaskCtrl');
  });
});
