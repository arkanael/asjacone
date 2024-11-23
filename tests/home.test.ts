import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';
import puppeteer, { Browser, Page } from 'puppeteer-core';
import findChrome from 'chrome-finder';
import fs from 'fs';
import path from 'path';

describe('Home Page', () => {
    let browser: Browser;
    let page: Page;

    const devices = [
        { name: 'Windows XP VGA', width: 640, height: 480 },
        { name: 'iPhone SE 2nd Gen', width: 750, height: 1334 },
        { name: 'Windows XP SVGA', width: 800, height: 600 },
        { name: 'Windows XP XGA', width: 1024, height: 768 },
        { name: 'Samsung Galaxy S21+', width: 1080, height: 2400 },
        { name: 'iPhone X, XS, 11 Pro', width: 1125, height: 2436 },
        { name: 'iPhone 14', width: 1170, height: 2532 },
        { name: 'MacBook Pro 13 (2010-2012)', width: 1280, height: 800 },
        { name: 'Windows XP SXGA', width: 1280, height: 1024 },
        { name: 'iPhone 12 Pro Max, 13 Pro Max, 14 Plus', width: 1284, height: 2778 },
        { name: 'iPhone 14 Pro Max', width: 1290, height: 2796 },
        { name: 'Xiaomi Mi 11', width: 1440, height: 3200 },
        { name: 'Windows XP UXGA', width: 1600, height: 1200 },
        { name: 'MacBook Pro 17 (2010-2012)', width: 1920, height: 1200 },
        { name: 'iPad Pro 9.7', width: 2048, height: 1536 },
        { name: 'iPad Pro 10.5', width: 2224, height: 1668 },
        { name: 'iPad Air (4th Gen, 5th Gen)', width: 2360, height: 1640 },
        { name: 'iPad Pro 11', width: 2388, height: 1668 },
        { name: 'MacBook Pro 13 (2016-2019)', width: 2560, height: 1600 },
        { name: 'iPad Pro 12.9', width: 2732, height: 2048 },
        { name: 'MacBook Pro 15 (2016-2019)', width: 2880, height: 1800 },
        { name: 'MacBook Pro 14 (2021 e posteriores)', width: 3024, height: 1964 },
        { name: 'MacBook Pro 16 (2019)', width: 3072, height: 1920 },
        { name: 'MacBook Pro 16 (2021 e posteriores)', width: 3456, height: 2234 },
        { name: 'Windows 8/8.1 4K UHD', width: 3840, height: 2160 },
        { name: 'Windows 10 4K UHD', width: 3840, height: 2160 },
        { name: 'Windows 11 5K', width: 5120, height: 2880 },
        { name: 'Windows 11 8K', width: 7680, height: 4320 },
    ];

    beforeAll(async () => {
        const screenshotDir = path.join(__dirname, '../screenshot');
        const fullPageDir = path.join(screenshotDir, 'FullPage');

        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir);
        }
        if (!fs.existsSync(fullPageDir)) {
            fs.mkdirSync(fullPageDir);
        }


        const executablePath = findChrome();
        browser = await puppeteer.launch({
            executablePath,
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        page = await browser.newPage();
    });

    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });
  

    it('should load home page and check for specific elements', async () => {
        await page.goto('http://localhost:3000/');
      
    });
    
  
    for (const device of devices) {
        it(`Responsive Design Test ${device.width}x${device.height}`, async () => {

            await page.setViewport({ width: device.width, height: device.height });
            await page.goto('http://localhost:3000');
            await page.screenshot({ path: `./screenshot/FullPage/home-${device.width}x${device.height}.png`, fullPage: true });
            await page.screenshot({ path: `./screenshot/home-${device.width}x${device.height}.png`, fullPage: false });

    });
    }
    
});
