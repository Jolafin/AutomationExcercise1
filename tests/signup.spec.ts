import { test } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';

test('User can sign up on automationexercise.com', async ({ page }) => {
  const signupPage = new SignupPage(page);
  const uniqueEmail = `user${Date.now()}@example.com`;

  await signupPage.goto();
  await signupPage.fillInitialForm('Test User', uniqueEmail);
  await signupPage.fillAccountDetails();
  await signupPage.fillAddressDetails();
  await signupPage.submitForm();
  await signupPage.expectAccountCreated();
});
