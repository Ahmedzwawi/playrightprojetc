import { Page, expect } from '@playwright/test';
import { error } from 'console';
export class LoginPage {
  readonly page: Page;
//on fait des expect
  constructor(page: Page) {
    this.page = page;
  }

  Element = {
    username: () => this.page.locator('input[name="user-name"]'),
    password: () => this.page.locator('input[name="password"]'),
    loginButton: () => this.page.locator('input[type="submit"]'),
    errorMessage: () => this.page.locator('h3[data-test="error"]')
  }

  async saisirUsername(username: string) {
    await this.Element.username().fill(username);
    }
    async saisirPassword(password: string) {    
    await this.Element.password().fill(password);
    }
    async clickLoginButton() {
    await this.Element.loginButton().click();
    }
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // async verifyTitle() {
  //   await expect(this.page).toHaveTitle(/Swag Labs/);
  // }
  async verifyErrorMessage() {
    return await this.Element.errorMessage()
  }
//   async login(username: string, password: string) {
//     await this.page.fill('#user-name', username);
//     await this.page.fill('#password', password);
//     await this.page.getByRole('button', { name: 'Login' }).click();
//   }

//   async verifyLoginSuccess() {
//     await expect(this.page.locator('text=Products')).toBeVisible();
// }
}

export default LoginPage;