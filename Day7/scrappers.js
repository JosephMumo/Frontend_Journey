const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="gatsby-focus-wrapper"]/div/main/div[4]/div/div[2]/div/div/picture/img');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();
    console.log({srcTxt});

    const [el1] = await page.$x('//*[@id="gatsby-focus-wrapper"]/div/main/div/div[1]/div/div[2]/div[2]');
    const txt = await el1.getProperty('textContent');
    const rawTxt = await txt.jsonValue();
    console.log({srcTxt, rawTxt});

    browser.close();
}

scrapeProduct('https://faholochemicals.com/')