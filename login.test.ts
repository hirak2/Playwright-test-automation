import {chromium, test} from "@playwright/test";

test("login", async () => { 
     // Fixed async syntax
     test.setTimeout(60000);
    const browser = await chromium.launch({


        headless: false,
    });//we added headless=false here because otherwise it will not open the browser for us
    const context= await browser.newContext(); //means it will not share its cookies with other page
    const page= await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/", { timeout: 60000 });
    //console.timeEnd('Page load');   // this will give you a clear idea of how long the page is taking to load
    //await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My Account')]")
    //await page.hover('text=My Account');
    //await page.waitForSelector("//a[@data-toggle='dropdown']//span[contains(.,'My Account')]", { state: 'visible' });
    await page.waitForSelector("//a[@data-toggle='dropdown']//span[contains(.,'My Account')]", { state: 'visible' });
    await page.click("//a[@data-toggle='dropdown']//span[contains(.,'My Account')]");
    
    


     //Xpath because there are 3 my accounts but here we had one login button so we but login , 

    await page.click("//a[text()='Login']")        //click on the text , text is locator 

    await page.fill("input[name='email']","hira.kai.khan@gmail.com") ;//fill the data fields

    await page.fill("input[name='password']","Abcd1234!");

    await page.click("input[value='Login']");
    await page.waitForTimeout(5000) ;  //




});