import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage';
import users from '../data/users.json';

test('QA-107 | Add Backpack To Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Step 1 - Open website
    await loginPage.open();

    // Step 2 - Login
    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );
    console.log(await page.url());

    // Step 3 - Verify inventory page
    await inventoryPage.verifyInventoryPage();

    // Step 4 - Add backpack
    await cartPage.addBackpackToCart();

    // Step 5 - Verify cart badge
    await cartPage.verifyCartCount('1');

});