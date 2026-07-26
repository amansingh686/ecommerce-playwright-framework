import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('QA-104 | Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);

});