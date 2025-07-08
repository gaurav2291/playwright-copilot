import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly docsNavLink = 'nav >> text=Docs';

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async clickDocsNav(): Promise<void> {
        await this.page.click(this.docsNavLink);
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }
}
