import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;
  readonly addToCartButtons: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.addToCartButtons = page.locator('.inventory_item button');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async goTo() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async getCartBadgeText(): Promise<string> {
    return this.cartBadge.innerText();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

export default ProductsPage;
