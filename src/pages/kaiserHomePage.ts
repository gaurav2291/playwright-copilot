import { expect, type Locator, type Page } from '@playwright/test';
import { PageUtils } from '../utils/pageUtils';

export class KaiserHomePage {
  readonly page: Page;
  // Navigation Locators as Locator objects
  readonly shopPlans: Locator;
  readonly doctorsLocations: Locator;
  readonly healthWellness: Locator;
  readonly signIn: Locator;
  readonly register: Locator;
  // readonly findDoctors: Locator;
  readonly contact: Locator;
  // readonly shopPlansMain: Locator;
  // Other Locators as Locator objects
  readonly searchInput: Locator;
  readonly languageSelector: Locator;
  readonly footerLinks: Locator;
  readonly bannerAlert: Locator;
  readonly regionBtn: Locator;
  readonly mobileMenuBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shopPlans = page.getByRole('link', { name: /Shop plans|Compare planes/i }).nth(0);
    this.doctorsLocations = page.getByRole('link', { name: /Doctors & Locations|Médicos y centros/i }).nth(0);
    this.healthWellness = page.getByRole('link', { name: /Health & wellness|Salud y bienestar/i }).nth(0);
    this.signIn = page.getByRole('link', { name: /Sign in|Iniciar sesión/i });
    this.register = page.getByRole('link', { name: /Register|Regístrese/i });
    // this.findDoctors = page.getByRole('link', { name: /Find doctors & locations|Buscar doctores y ubicaciones/i });
    this.contact = page.getByRole('link', { name: /Contact us|Contáctenos/i });
    // this.shopPlansMain = page.getByRole('link', { name: /Shop plans|Planes de salud/i });
    this.searchInput = page.getByRole('textbox', { name: /search|buscar/i });
    this.languageSelector = page.getByRole('button', { name: /language|idioma/i });
    this.footerLinks = page.locator('footer').getByRole('link');
    this.bannerAlert = page.getByRole('alert');
    this.regionBtn = page.getByRole('button', { name: /Choose your region|Elige tu región/i });
    this.mobileMenuBtn = page.getByRole('button', { name: /menu/i });
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    await PageUtils.waitForPageLoad(this.page);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async clickSignIn(): Promise<void> {
    if (await this.signIn.first().isVisible()) {
      await PageUtils.click(this.signIn.first());
      await this.page.waitForTimeout(5000)
      // await this.page.waitForLoadState('networkidle'); // Ensure page is fully loaded
    } else {
      if (await this.mobileMenuBtn.isVisible()) {
        await PageUtils.click(this.mobileMenuBtn);
        await PageUtils.waitForVisible(this.signIn.first());
        await PageUtils.click(this.signIn.first());
      } else {
        throw new Error('Sign In button not found');
      }
    }
  }

  async clickRegister(): Promise<void> {
    if (await this.register.first().isVisible()) {
      await PageUtils.click(this.register.first());
      await this.page.waitForTimeout(5000)
      // await this.page.waitForLoadState('networkidle'); // Ensure page is fully loaded
    
    } else {
      if (await this.mobileMenuBtn.isVisible()) {
        await PageUtils.click(this.mobileMenuBtn);
        await PageUtils.waitForVisible(this.register.first());
        await PageUtils.click(this.register.first());
      } else {
        throw new Error('Register button not found');
      }
    }
  }

  async search(term: string): Promise<void> {
    await PageUtils.fill(this.searchInput, term);
    await this.page.keyboard.press('Enter');
  }

  async selectLanguage(language: string): Promise<void> {
    await PageUtils.click(this.languageSelector);
    await PageUtils.click(this.page.getByRole('option', { name: language }));
  }

  async getFooterLinks(): Promise<string[]> {
    return this.footerLinks.allInnerTexts();
  }

  async isBannerVisible(): Promise<boolean> {
    return this.bannerAlert.isVisible();
  }

  async handleRegionLanguagePopup(): Promise<void> {
    if (await this.regionBtn.count() > 0) {
      try {
        await PageUtils.waitForVisible(this.regionBtn.first());
        await PageUtils.click(this.regionBtn.first());
      } catch (e) {
        console.warn('Region popup present but not clickable:', e);
      }
    }
    try {
      await Promise.race([
        this.register.first().waitFor({ state: 'visible', timeout: 10000 }),
        this.signIn.first().waitFor({ state: 'visible', timeout: 10000 })
      ]);
    } catch (e) {
      console.warn('Main content not detected after region popup:', e);
    }
  }

  // Navigation Methods (use robustClick pattern)
  async clickShopPlans(): Promise<void> { await this.robustClick(this.shopPlans); }
  async clickDoctorsLocations(): Promise<void> { await this.robustClick(this.doctorsLocations); }
  async clickHealthWellness(): Promise<void> {
    await this.robustClick(this.healthWellness);
    await this.page.waitForTimeout(5000)
    // await this.page.waitForLoadState('networkidle'); 
  }// Ensure page is fully loaded
  async clickContact(): Promise < void> { await this.robustClick(this.contact); }

  async robustClick(locator: Locator): Promise < void> {
      if(await locator.count() > 0 && await locator.first().isVisible()) {
      await PageUtils.click(locator.first());
      await this.page.waitForTimeout(5000); // Allow time for navigation
    } else {
      throw new Error('Element not found or not visible');
    }
  }
}
