import { test, expect } from '../fixtures/basefixtures';
import loginData from '../test-data/loginData.json';

test.describe('Valid Login Test', () => {

    test('Valid Login', async ({ loginPage }) => {

        await loginPage.navigate();

        await loginPage.login(
            loginData.valid.username,
            loginData.valid.password
        );

        await expect(loginPage.userloggedname).toBeVisible();
        await expect(loginPage.userloggedname).toHaveText('Welcome samihaM');

    });

});