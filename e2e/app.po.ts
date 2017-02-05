import { browser, element, by } from 'protractor';

export class PortfolioFrontendPage {
  navigateTo() {
    return browser.get('/');
  }
}
