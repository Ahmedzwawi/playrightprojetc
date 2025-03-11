import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Vérifie le titre de la page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('username correcte & mot de passe correct', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clickLoginButton();
  await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});

test('username incorrecte & mot de passe correct', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.saisirUsername('standard_faulte_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clickLoginButton();
  await expect(await loginPage.verifyErrorMessage()).toBeVisible();//si on met pas await ,expect va etre excute avnt les awit login etc
});