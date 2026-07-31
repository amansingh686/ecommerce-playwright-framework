import { expect } from '@playwright/test';

export class CartPage {
    constructor(page) {
        this.page = page;

        this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

    async verifyCartCount(count) {
        await expect(this.cartBadge).toHaveText(count);
    }
}