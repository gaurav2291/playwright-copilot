import { Page, Locator, expect } from '@playwright/test';

export class PageUtils {
  static async click(locator: Locator, options?: Parameters<Locator['click']>[0]) {
    await expect(locator).toBeVisible({ timeout: 10000 });
    await locator.click(options);
  }

  static async fill(locator: Locator, value: string, options?: Parameters<Locator['fill']>[1]) {
    await expect(locator).toBeVisible({ timeout: 10000 });
    await locator.fill(value, options);
  }

  static async waitForPageLoad(
    page: Page,
    timeout = 15000,
    state: 'load' | 'domcontentloaded' | 'networkidle' = 'domcontentloaded'
  ) {
    await page.waitForLoadState(state, { timeout });
  }

  static async waitForVisible(locator: Locator, timeout = 10000) {
    await expect(locator).toBeVisible({ timeout });
  }

  static async waitForHidden(locator: Locator, timeout = 10000) {
    await expect(locator).toBeHidden({ timeout });
  }
}
