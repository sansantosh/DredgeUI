/* global describe, beforeEach, it, browser, expect */
'use strict';

import SantestPage from './santest.po';

describe('Santest page', () => {
  let santestPage;

  beforeEach(() => {
    santestPage = new SantestPage();
    browser.get('/#/santest');
  });

  it('should say SantestCtrl', () => {
    expect(santestPage.heading.getText()).toEqual('santest');
    expect(santestPage.text.getText()).toEqual('SantestCtrl');
  });
});
