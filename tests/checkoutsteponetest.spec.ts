// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/login.page';
// import { ProductsPage } from '../pages/products.page';
// import { CartPage } from '../pages/cart.page';
// import { CheckoutStepOnePage } from '../pages/checkoutstepone.page';

// test.beforeEach(async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.saisirUsername('standard_user');
//   await loginPage.saisirPassword('secret_sauce');
//   await loginPage.clickLoginButton();
//   const productsPage = new ProductsPage(page); // Ajouter un produit et allerà la page de checkout
//   await productsPage.addFirstProductToCart();
//   await productsPage.goToCart();
//   const cartPage = new CartPage(page);
//   await cartPage.clickCheckout();
// });
// test('Remplir le formulaire de checkout avec succès', async ({ page }) => {
//   const checkoutPage = new CheckoutStepOnePage(page);
//   await checkoutPage.fillCheckoutForm('Ahmed', 'Zwawi', '92000');
//   await checkoutPage.clickContinue();
//   expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html'); // Vérifier qu'on passe à checkout-step-two
// });
// test('Ne pas remplir le formulaire et vérifier le message d’erreur', async ({ page }) => {
//   const checkoutPage = new CheckoutStepOnePage(page);
//   await checkoutPage.clickContinue();
//   const errorMessage = await checkoutPage.getErrorMessage();
//   expect(errorMessage).toBe('Error: First Name is required');
// });
// test('Annuler le checkout et revenir au panier', async ({ page }) => {
//   const checkoutPage = new CheckoutStepOnePage(page);
//   await checkoutPage.clickCancel();
//   expect(page.url()).toBe('https://www.saucedemo.com/cart.html');
// });
