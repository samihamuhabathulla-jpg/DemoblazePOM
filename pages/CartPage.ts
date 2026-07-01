import { Page,Locator } from '@playwright/test';
export class CartPage{
    readonly page:Page;
    readonly product:Locator;
    readonly cartclick:Locator;
    readonly cart:Locator;
    readonly  carttitle:Locator;

    constructor(page:Page){
        this.page=page;
        this.product=page.locator('//a[text()="Samsung galaxy s6"]');
        this.cartclick=page.locator('//a[@onclick="addToCart(1)"]');
        this.cart=page.locator('#cartur');
        this.carttitle=page.locator("//td[text()='Samsung galaxy s6']");

    }
    async addtocart(){
        await this.product.click();
        await this.cartclick.click();

        this.page.on("dialog",async(alert)=>{
        console.log(alert.message());
        await alert.accept();
        })
        await this.cart.click();

    }
}