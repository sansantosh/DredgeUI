/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Users', () => {
  let service;

  beforeEach(module('dredge'));

  beforeEach(inject((Users) => {
    service = Users;
  }));

  it('should equal Users', () => {
    expect(service.get()).toEqual('Users');
  });
});
