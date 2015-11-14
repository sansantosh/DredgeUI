/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('fancyButton', () => {
  let scope
    , element;

  beforeEach(module('dredge', 'directives/fancy-button-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<fancy-button></fancy-button>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().fancyButton.name).toEqual('fancyButton');
  });
});
