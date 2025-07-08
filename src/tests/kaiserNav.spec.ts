import { test, expect } from '../tests/testHooks';
import { KaiserHomePage } from '../pages/kaiserHomePage';

// baseUrl is now picked from the environment via the shared testHooks fixture

test.describe('Kaiser Permanente Navigation', () => {
    test('should display main navigation links', async ({ homePage }) => {
        expect(await homePage.isVisible(homePage.shopPlans)).toBeTruthy();
        expect(await homePage.isVisible(homePage.doctorsLocations)).toBeTruthy();
        expect(await homePage.isVisible(homePage.healthWellness)).toBeTruthy();
    });

    test('should navigate to Shop Plans', async ({ homePage }) => {
        await homePage.clickShopPlans();
        await expect(homePage.page).toHaveURL(/.*shop-plans.*/i);
    });

    test('should navigate to Doctors & Locations', async ({ homePage }) => {
        await homePage.clickDoctorsLocations();
        await expect(homePage.page).toHaveURL(/.*doctors-locations.*/i);
    });

    test('should navigate to Health & Wellness', async ({ homePage }) => {
        await homePage.clickHealthWellness();
        await expect(homePage.page).toHaveURL(/.*health-wellness*/i);
    });

    test('should display language selector', async ({ homePage }) => {
        expect(await homePage.isVisible(homePage.languageSelector)).toBeTruthy();
    });
});
