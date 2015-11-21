/* global describe, beforeEach, it, browser, expect */
'use strict';

import LandingPage from './landing.po';

describe('Landing page', () => {
  let landingPage;

  beforeEach(() => {
    landingPage = new LandingPage();
    browser.get('/#/landing');
  });

  it('should say LandingCtrl', () => {
    expect(landingPage.heading.getText()).toEqual('landing');
    expect(landingPage.text.getText()).toEqual('LandingCtrl');
  });
});
