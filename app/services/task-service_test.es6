/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Task', () => {
  let service;

  beforeEach(module('dredge'));

  beforeEach(inject((Task) => {
    service = Task;
  }));

  it('should equal Task', () => {
    expect(service.get()).toEqual('Task');
  });
});
