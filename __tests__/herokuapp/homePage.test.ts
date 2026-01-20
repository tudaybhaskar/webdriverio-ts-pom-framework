import { browser } from '@wdio/globals';
import { HomePage } from '../../page_objects/herokuapp/index.ts';


describe('Home Page', ()=>{

    it('Open Home pag and validate the title', async()=>{
        await browser.url("https://the-internet.herokuapp.com/");
        const homePage = new HomePage();
        await homePage.assertHeading();
    });
})