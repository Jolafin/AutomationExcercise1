import { Page, expect } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.automationexercise.com/signup');
  }

  async fillInitialForm(name: string, email: string) {
    await this.page.fill('[data-qa="signup-name"]', name);
    await this.page.fill('[data-qa="signup-email"]', email);
    await this.page.click('[data-qa="signup-button"]');
  }

  async fillAccountDetails() {
    await expect(this.page.getByText('Enter Account Information')).toBeVisible();
    await this.page.check('#id_gender1');
    await this.page.fill('#password', 'SecurePass123!');
    await this.page.selectOption('#days', '10');
    await this.page.selectOption('#months', '5');
    await this.page.selectOption('#years', '1995');
    await this.page.check('#newsletter');
    await this.page.check('#optin');
  }

  async fillAddressDetails() {
    await this.page.fill('#first_name', 'Test');
    await this.page.fill('#last_name', 'User');
    await this.page.fill('#company', 'Automation Inc.');
    await this.page.fill('#address1', '123 Automation Street');
    await this.page.fill('#address2', 'Suite 456');
    await this.page.selectOption('#country', 'United States');
    await this.page.fill('#state', 'California');
    await this.page.fill('#city', 'Los Angeles');
    await this.page.fill('#zipcode', '90001');
    await this.page.fill('#mobile_number', '1234567890');
  }

  async submitForm() {
    await this.page.click('[data-qa="create-account"]');
  }

  async expectAccountCreated() {
    await expect(this.page.getByText('Account Created!')).toBeVisible();
  }
}
