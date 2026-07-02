import { test, expect } from '../fixtures/basefixtures';
import loginData from '../test-data/loginData.json';

test.describe('Invalid Login Test', () => {

    test('Invalid Login', async ({ invalidPage, page }) => {

        await invalidPage.navigate();
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Wrong password.');

            await dialog.accept();
        });

        await invalidPage.login(
            loginData.invalid.username,
            loginData.invalid.password
        );
    });

});