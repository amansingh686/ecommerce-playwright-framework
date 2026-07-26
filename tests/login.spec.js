import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../data/users.json';
import { InventoryPage } from '../pages/InventoryPage';
test('QA-105 | Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
         users.standardUser.username,
        users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory/);

    const inventoryPage = new InventoryPage(page);

    await inventoryPage.verifyInventoryPage();

});