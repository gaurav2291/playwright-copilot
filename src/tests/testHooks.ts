import { test as base, expect } from '@playwright/test';
import { KaiserHomePage } from '../pages/kaiserHomePage';
import testDataJson from '../testData.json';

type Env = 'QA' | 'STG' | 'DEV';
const env = (process.env.ENV as Env) || 'QA';
const testData = testDataJson[env];

// Extend base test with homePage fixture
export const test = base.extend<{ homePage: KaiserHomePage }>({
  homePage: async ({ page }, use) => {
    const homePage = new KaiserHomePage(page);
    await homePage.navigateTo(testData.baseUrl);
    await homePage.shopPlans.first().waitFor({ state: 'visible', timeout: 10000 });
    await use(homePage);
  },
});

export { expect };
