class HomePage {
  visit() {
    cy.visit('');
  }

  clickTheSignUpLink() {
    cy.get('a').contains('Sign up').click();
  }

  clickTheLoginLink() {
    cy.get('a').contains('Log in').click();
  }

  clickThePhonesLink() {
    cy.get('.list-group-item').contains('Phones').click();
  }

  clickTheItemLink(productName) {
    cy.get('.card-title').contains(productName).click();
  }
};

export const homePage = new HomePage();
