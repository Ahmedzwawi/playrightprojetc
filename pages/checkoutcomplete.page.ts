import { Page, Locator } from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;
  readonly confirmationMessage: Locator;
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.confirmationMessage = page.locator('.complete-header');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async goTo() {
    await this.page.goto('https://www.saucedemo.com/checkout-complete.html');
  }

  async getConfirmationMessage(): Promise<string> {
    return this.confirmationMessage.innerText();
  }

  async clickBackHome() {
    await this.backHomeButton.click();
  }
}

export default CheckoutCompletePage;
