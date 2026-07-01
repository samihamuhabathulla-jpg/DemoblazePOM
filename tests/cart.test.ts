import {test,expect} from '../fixtures/basefixtures';
import loginData from '../test-data/loginData.json';

test.describe('Cart Test',()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
        await loginPage.login(
            loginData.valid.username,
            loginData.valid.password
        )
    })
    test('Cart ',async({cartPage})=>{
        await cartPage.addtocart();
        await expect (cartPage.carttitle).toHaveText('Samsung galaxy s6');

    })
})