/* global describe, beforeEach, it, browser, expect */
'use strict';

import TaskPage from './task.po';

describe('Task page', () => {
  let taskPage;

  beforeEach(() => {
    taskPage = new TaskPage();
    browser.get('/#/task');
  });

  it('should say TaskCtrl', () => {
    expect(taskPage.heading.getText()).toEqual('task');
    expect(taskPage.text.getText()).toEqual('TaskCtrl');
  });
});
