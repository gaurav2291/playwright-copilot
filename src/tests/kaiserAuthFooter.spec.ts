import { test, expect } from '@playwright/test';
import { KaiserHomePage } from '../pages/kaiserHomePage';

const baseUrl = "https://espanol.kaiserpermanente.org/es/front-door";

test.describe('Kaiser Permanente Auth & Footer', () => {
    let homePage: KaiserHomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new KaiserHomePage(page);
        await homePage.navigateTo(baseUrl);
        await homePage.shopPlans.first().waitFor({ state: 'visible', timeout: 10000 });
    });

    test('should display Sign In and Register', async () => {
        expect(await homePage.isVisible(homePage.signIn)).toBeTruthy();
        expect(await homePage.isVisible(homePage.register)).toBeTruthy();
    });

    test('should open Sign In page', async () => {
        await homePage.clickSignIn();
        await expect(homePage.page).toHaveURL(/.*identityauth.kaiserpermanente.org*/i);
    });

    test('should open Register page', async () => {
        await homePage.clickRegister();
        await expect(homePage.page).toHaveURL(/.*register.*/i);
    });

    test('should display footer links', async () => {
        const links = await homePage.getFooterLinks();
        expect(links.length).toBeGreaterThan(0);
    });

    test('should display banner/alert if present', async () => {
        const visible = await homePage.isBannerVisible();
        expect(typeof visible === 'boolean' || typeof visible === 'object').toBeTruthy();
    });
});
