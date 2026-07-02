import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly clicklogin: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;
    readonly userloggedname: Locator;

    constructor(page: Page) {
        this.page = page;

        this.clicklogin = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginbutton = page.locator('button[onclick="logIn()"]');
        this.userloggedname = page.locator('#nameofuser');
    }

    async navigate() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.clicklogin.click();

        await this.username.fill(username);
        await this.password.fill(password);

        await this.loginbutton.click();
        await expect(this.userloggedname).toContainText("Welcome", {
            timeout: 10000
        });
    }
}