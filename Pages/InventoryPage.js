import { expect } from '@playwright/test';

export class InventoryPage {

    constructor(page) {

        this.page = page;

        this.logo = page.locator('.app_logo');

        this.cart = page.locator('.shopping_cart_link');

        this.inventoryItems = page.locator('.inventory_item');

    }

    async verifyInventoryPage() {

        await expect(this.page).toHaveURL(/inventory/);

        await expect(this.logo).toBeVisible();

        await expect(this.cart).toBeVisible();

        await expect(this.inventoryItems.first()).toBeVisible();

    }

}