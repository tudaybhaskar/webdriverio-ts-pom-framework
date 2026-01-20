// import { ChainablePromiseElement } from "webdriverio";
import allureReporter  from '@wdio/allure-reporter';

export class HomePage{

    get pageHeading(){
        return $('.heading');
    }

    async assertHeading(){
        allureReporter.step('Assert heading is "Welcome to the-internet', async()=>{
            await expect(this.pageHeading).toHaveText('Welcome to the-internet');
        })
    }
}