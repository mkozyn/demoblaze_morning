class LoginPage {
  get loginUsernameField() {
    return cy.get('#loginusername');
  }

  get passwordUsernameField() {
    return cy.get('#loginpassword');
  };

  get loginBtn() {
    return cy.get('.btn').contains('Log in');
  }

  fillTheLoginFields(name) {
    this.loginUsernameField.type(name.username, { force: true });
    this.passwordUsernameField.type(name.password, { force: true });
  };

  clickLoginBtn() {
    this.loginBtn.click();
  }

  windowLoginAlert() {
    cy.on('window:alert', (alert) => {
      expect(alert).to.be.eq('Sign up successful.');
    });
  }
};

export const loginPage = new LoginPage();
