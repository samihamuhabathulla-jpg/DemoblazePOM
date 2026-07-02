import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

type MyFixtures = {
    loginPage: LoginPage;
    cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    }

});

export { expect };