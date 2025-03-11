// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/login.page';
// import { ProductsPage } from '../pages/products.page';
// import { CartPage } from '../pages/cart.page';
// import { CheckoutStepOnePage } from '../pages/checkoutstepone.page';
// import { CheckoutStepTwoPage } from '../pages/checkoutsteptwo.page';

// test.beforeEach(async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.saisirUsername('standard_user');
//   await loginPage.saisirPassword('secret_sauce');
//   await loginPage.clickLoginButton();
//   const productsPage = new ProductsPage(page);  // Ajouter un produit et aller à la page de checkout step two
//   await productsPage.addFirstProductToCart();
//   await productsPage.goToCart();

//   const cartPage = new CartPage(page);
//   await cartPage.clickCheckout();
//   const checkoutStepOnePage = new CheckoutStepOnePage(page);
//   await checkoutStepOnePage.fillCheckoutForm('John', 'Doe', '75000');
//   await checkoutStepOnePage.clickContinue();
// });
// test('Vérifier que les produits et le prix total s’affichent', async ({ page }) => {
//   const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
//   const itemCount = await checkoutStepTwoPage.getCartItemCount();
//   expect(itemCount).toBeGreaterThan(0);
//   const totalPrice = await checkoutStepTwoPage.getTotalPrice();
//   expect(totalPrice).toContain('$'); // Vérifie que le prix est bien affiché avec un symbole dollar
// });
// test('Finaliser l’achat et vérifier la redirection', async ({ page }) => {
//   const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
//   await checkoutStepTwoPage.clickFinish();
//   expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html');  // Vérifier qu'on est bien sur la page de confirmation
// });
// test('Annuler la commande et revenir au catalogue', async ({ page }) => {
//   const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
//   await checkoutStepTwoPage.clickCancel();
//   expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
// });
