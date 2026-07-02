import { test as base, expect}from '@playwright/test';
import {LoginPage}from '../pages/LoginPage';
import {CartPage}from '../pages/CartPage';
import {InvalidPage}from '../pages/InvalidPage';

type Fixture = {
    loginPage:LoginPage;
    cartPage:CartPage;
    invalidPage:InvalidPage;
}

export const test = base.extend<Fixture>({

    loginPage:async({page},use)=>{
        await use (new LoginPage(page));
    },
    cartPage: async({page},use)=>{
        await use (new CartPage(page));
    },
    invalidPage:async({page},use)=>{
        await use(new InvalidPage(page));
    }
});

export {expect};