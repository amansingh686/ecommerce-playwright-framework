import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage';
import users from '../data/users.json';

test('QA-108 | Remove Backpack From Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Step 1 - Open Website
    await loginPage.open();

    // Step 2 - Login
    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    // Step 3 - Verify Inventory Page
    await inventoryPage.verifyInventoryPage();

    // Step 4 - Add Backpack
    await cartPage.addBackpackToCart();

    // Step 5 - Verify Cart Count = 1
    await cartPage.verifyCartCount('1');

    // Step 6 - Remove Backpack
    await cartPage.removeBackpackFromCart();

    // Step 7 - Verify Cart is Empty
    await cartPage.verifyCartIsEmpty();

});