import { test, expect } from './testHooks';
import { KaiserHomePage } from '../pages/kaiserHomePage';

// baseUrl is now picked from the environment via the shared testHooks fixture

test.describe('Kaiser Permanente Home Page Functionalities', () => {
    test('should load homepage and verify title', async ({ homePage }) => {
        const title = await homePage.getTitle();
        expect(title).toContain('Kaiser');
    });

    // The following tests are now covered in kaiserNav.spec.ts and kaiserAuthFooter.spec.ts
    // Remove or comment out to avoid duplication and speed up test runs.
    // test('should display main navigation links', async () => {
    //     expect(await homePage.isVisible(homePage.shopPlans)).toBeTruthy();
    //     expect(await homePage.isVisible(homePage.doctorsLocations)).toBeTruthy();
    //     expect(await homePage.isVisible(homePage.healthWellness)).toBeTruthy();
    // });
    // test('should navigate to Shop Plans', async () => {
    //     await homePage.clickShopPlans();
    //     await expect(homePage.page).toHaveURL(/.*shop-plans.*/i);
    // });
    // test('should navigate to Doctors & Locations', async () => {
    //     await homePage.clickDoctorsLocations();
    //     await expect(homePage.page).toHaveURL(/.*doctors-locations.*/i);
    // });
    // test('should navigate to Health & Wellness', async () => {
    //     await homePage.clickHealthWellness();
    //     await expect(homePage.page).toHaveURL(/.*health-wellness*/i);
    // });
    // test('should display Sign In and Register', async () => {
    //     expect(await homePage.isVisible(homePage.signIn)).toBeTruthy();
    //     expect(await homePage.isVisible(homePage.register)).toBeTruthy();
    // });
    // test('should open Sign In page', async () => {
    //     await homePage.clickSignIn();
    //     await expect(homePage.page).toHaveURL(/.*identityauth.kaiserpermanente.org*/i);
    // });
    // test('should open Register page', async () => {
    //     await homePage.clickRegister();
    //     await expect(homePage.page).toHaveURL(/.*register.*/i);
    // });
    // test('should display language selector', async () => {
    //     expect(await homePage.isVisible(homePage.languageSelector)).toBeTruthy();
    // });
    // test('should display footer links', async () => {
    //     const links = await homePage.getFooterLinks();
    //     expect(links.length).toBeGreaterThan(0);
    // });
    // test('should display banner/alert if present', async () => {
    //     const visible = await homePage.isBannerVisible();
    //     expect(typeof visible === 'boolean' || typeof visible === 'object').toBeTruthy();
    // });

    // test('should display Contact Us link', async () => {
    //     await expect(homePage.contact).toBeVisible();
    // });

    // test('should open Shop Plans from main button', async () => {
    //     await homePage.clickShopPlans();
    //     await expect(homePage.page).toHaveURL(/.*shop-plans.*/i);
    // });
});
