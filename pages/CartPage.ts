import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

    readonly page: Page;

    readonly product: Locator;
    readonly addToCart: Locator;
    readonly cart: Locator;
    readonly carttitle: Locator;

    constructor(page: Page) {

        this.page = page;

        this.product = page.getByRole('link', { name: 'Samsung galaxy s6' });

        this.addToCart = page.getByRole('link', { name: 'Add to cart' });

        this.cart = page.locator('#cartur');

        this.carttitle = page
            .getByRole('cell', { name: 'Samsung galaxy s6' })
            .first();
    }

    async addtocart() {

        await this.product.click();

        await expect(this.addToCart).toBeVisible();

        this.page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });

        await this.addToCart.click();

        await this.page.waitForTimeout(2000);

        await this.cart.click();

        await this.page.waitForURL('**/cart.html');

        await expect(this.carttitle).toBeVisible({
            timeout: 10000
        });
    }
}