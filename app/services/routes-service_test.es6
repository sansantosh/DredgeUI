/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Routes', () => {
  let service;

  beforeEach(module('dredge'));

  beforeEach(inject((Routes) => {
    service = Routes;
  }));

  it('should equal Routes', () => {
    expect(service.get()).toEqual('Routes');
  });
});
