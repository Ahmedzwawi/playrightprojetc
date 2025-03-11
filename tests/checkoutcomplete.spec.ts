import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutStepOnePage } from '../pages/checkoutstepone.page';
import { CheckoutStepTwoPage } from '../pages/checkoutsteptwo.page';
import { CheckoutCompletePage } from '../pages/checkoutcomplete.page';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clickLoginButton();
  // Ajouter un produit et allerà la page de checkout complete
  const productsPage = new ProductsPage(page);
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  const cartPage = new CartPage(page);
  await cartPage.clickCheckout();
  const checkoutStepOnePage = new CheckoutStepOnePage(page);
  await checkoutStepOnePage.fillCheckoutForm('Ahmed', 'Zwawi', '92000');
  await checkoutStepOnePage.clickContinue();
  const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
  await checkoutStepTwoPage.clickFinish();
});
test('Vérifier le message de confirmation', async ({ page }) => {
  const checkoutCompletePage = new CheckoutCompletePage(page);
  const message = await checkoutCompletePage.getConfirmationMessage();
  expect(message).toBe('Thank you for your order!');
});
test('Retourner à la page des produits', async ({ page }) => {
  const checkoutCompletePage = new CheckoutCompletePage(page);
  await checkoutCompletePage.clickBackHome();
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});
