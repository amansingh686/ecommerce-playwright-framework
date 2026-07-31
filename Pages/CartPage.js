import { expect } from '@playwright/test';

export class CartPage {
    constructor(page) {
        this.page = page;

        // Add to Cart Button
        this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');

        // Remove Button
        this.removeBackpackButton = page.locator('#remove-sauce-labs-backpack');

        // Cart Badge
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    // Click on Add to Cart button
    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

    // Click on Remove button
    async removeBackpackFromCart() {
        await this.removeBackpackButton.click();
    }

    // Verify cart badge count
    async verifyCartCount(count) {
        await expect(this.cartBadge).toHaveText(count);
    }

    // Verify cart is empty
    async verifyCartIsEmpty() {
        await expect(this.cartBadge).toHaveCount(0);
    }
}