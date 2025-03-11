// import { Page, Locator } from '@playwright/test';

// export class CheckoutStepTwoPage {
//   readonly page: Page;
//   readonly cartItems: Locator;
//   readonly totalPrice: Locator;
//   readonly finishButton: Locator;
//   readonly cancelButton: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.cartItems = page.locator('.cart_item');
//     this.totalPrice = page.locator('.summary_total_label');
//     this.finishButton = page.locator('[data-test="finish"]');
//     this.cancelButton = page.locator('[data-test="cancel"]');
//   }

//   async goTo() {
//     await this.page.goto('https://www.saucedemo.com/checkout-step-two.html');
//   }

//   async clickFinish() {
//     await this.finishButton.click();
//   }

//   async clickCancel() {
//     await this.cancelButton.click();
//   }

//   async getTotalPrice(): Promise<string> {
//     return this.totalPrice.innerText();
//   }

//   async getCartItemCount(): Promise<number> {
//     return await this.cartItems.count();
//   }
// }

// export default CheckoutStepTwoPage;
