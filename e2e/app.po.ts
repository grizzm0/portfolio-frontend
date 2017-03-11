import { browser } from 'protractor';

export class PortfolioFrontendPage {
  navigateTo() {
    return browser.get('/');
  }
}
