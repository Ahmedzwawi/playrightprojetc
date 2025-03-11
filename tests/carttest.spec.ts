import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clickLoginButton();
  const productsPage = new ProductsPage(page);  // Ajouter un produit au panier
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();
});
test('Vérifier que le panier contient un produit', async ({ page }) => {
  const cartPage = new CartPage(page);
  const itemCount = await cartPage.getCartItemCount();
  expect(itemCount).toBe(1);
});

test('Supprimer un produit du panier', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.removeFirstItem();
  const itemCount = await cartPage.getCartItemCount();
  expect(itemCount).toBe(0);
});
test('Continuer les achats depuis le panier', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.clickContinueShopping();
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');  // Vérifier que l'on est revenu à la page des produits
//   expect(page.url()).toBe('https://www.saucedemo.com/cart.html');  // Vérifier que l'on est revenu à la page des produits
});
test('Aller à la page de checkout', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.clickCheckout();
  expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');  // Vérifier que l'on est sur la page de checkout
});
