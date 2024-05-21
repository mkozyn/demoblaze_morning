class SignUpPage {
  get usernameField() {
    return cy.get('#sign-username');
  };

  get passwordField() {
    return cy.get('#sign-password');
  };

  fillTheFields(name) {
    this.usernameField.type(name.username, { force: true });
    this.passwordField.type(name.password, { force: true });
  };

  get signBtn() {
    return cy.get('.btn').contains('Sign up');
  }

  clickSignBtn() {
    this.signBtn.click();
  }

  windowAlert() {
    cy.on('window:alert', (alert) => {
      expect(alert).to.be.eq('Log in succesfull');
    });
  }
};

export const signUp = new SignUpPage();
