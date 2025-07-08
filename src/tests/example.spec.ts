import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import testDataJson from '../testData.json';

const env = 'QA'; // Change this to 'Prod' or 'Dev' as needed
// const env = process.env.ENV || 'QA';
const testData = testDataJson[env];

test.describe('Example Test Suite', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateTo(testData.baseUrl);
    });

    test('Test Case 1: Verify page title', async () => {
        const title = await homePage.getTitle();
        expect(title).toContain('Playwright');
    });

    test('Test Case 2: Click on Docs link', async ({ page }) => {
        await homePage.clickDocsNav();
        await page.waitForURL('**/docs/intro');
        expect(page.url()).toContain('/docs/intro');
    });
});