import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly removeButtons: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.removeButtons = page.locator('.cart_item button[data-test^="remove"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }

  async goTo() {
    await this.page.goto('https://www.saucedemo.com/cart.html');
  }

  async removeFirstItem() {
    await this.removeButtons.first().click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }

  async getCartItemCount(): Promise<number> {
    return await this.cartItems.count();
  }
}

export default CartPage;
