// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/login.page';
// import { ProductsPage } from '../pages/products.page';

// test.beforeEach(async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.saisirUsername('standard_user');
//   await loginPage.saisirPassword('secret_sauce');
//   await loginPage.clickLoginButton();
// });
// test('Vérifier que les produits sont affichés', async ({ page }) => {
//   const productsPage = new ProductsPage(page);
//   const isVisible = await productsPage.inventoryItems.first().isVisible();
//   expect(isVisible).toBeTruthy();
// });
// test('Ajouter un produit au panier et vérifier le badge', async ({ page }) => {
//   const productsPage = new ProductsPage(page);
//   await productsPage.addFirstProductToCart();
//   const badgeText = await productsPage.getCartBadgeText();
//   expect(badgeText).toBe('1');
// });
