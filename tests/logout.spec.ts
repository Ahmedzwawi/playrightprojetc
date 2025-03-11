// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/login.page';
// import { LogoutPage } from '../pages/logout.page';

// test.beforeEach(async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.saisirUsername('standard_user');
//   await loginPage.saisirPassword('secret_sauce');
//   await loginPage.clickLoginButton();
// });

// test('Se déconnecter et vérifier la redirection', async ({ page }) => {
//   const logoutPage = new LogoutPage(page);
//   await logoutPage.openMenu();
//   await logoutPage.clickLogout();
//   // Vérifier qu'on est bien redirigé vers la page de login
//   expect(page.url()).toBe('https://www.saucedemo.com/');
// });
