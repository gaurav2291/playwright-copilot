import { Page, Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly docsNavLink: Locator;
    // Add more locators as needed

    constructor(page: Page) {
        this.page = page;
        this.docsNavLink = page.locator('nav >> text=Docs');
        // Add more locators here as needed
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async clickDocsNav(): Promise<void> {
        await this.docsNavLink.click();
    }

    // Add more reusable methods as needed
}