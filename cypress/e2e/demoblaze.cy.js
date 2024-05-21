/// <reference types='cypress' />

import { homePage } from '../support/paggge/homePageObj';
import { signUp } from '../support/paggge/signUpObj';
import { loginPage } from '../support/paggge/loginPageObj';
import { productPage } from '../support/paggge/productPageObj';

describe('E2E FLOW', () => {
  let user;
  const productName = 'Samsung galaxy s6';
  beforeEach(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should provide an ability to register in to the app', () => {
    homePage.visit();
    homePage.clickTheSignUpLink();
    signUp.fillTheFields(user);
    signUp.clickSignBtn();

    signUp.windowAlert();
  });

  it('should provide an ability to add product in to the cart', () => {
    homePage.visit();
    homePage.clickTheSignUpLink();
    signUp.fillTheFields(user);
    signUp.clickSignBtn();

    homePage.clickTheLoginLink();
    loginPage.fillTheLoginFields(user);
    loginPage.clickLoginBtn();

    loginPage.windowLoginAlert();
  });

  it('should provide an ability to add product in to the cart', () => {
    homePage.visit();
    homePage.clickThePhonesLink();
    homePage.clickTheItemLink(productName);

    productPage.clickAddToCartButton(); // + alert
  });
});
