
import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

    const selectorList = {
      usernameField : "[name='username']",
      passwordField : "[name='password']",
      loginButton : "[type='submit']",
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
      dashboardGrid : ".orangehrm-dashboard-grid",
      wrongCredentialAlert : "[role='alert']"
    }

    it('CST001- User Info - Login with Sucess', () => {
      cy.visit('/auth/login');
      cy.get(selectorList.usernameField).type('Admin');
      cy.get(selectorList.passwordField).type('admin123');
      cy.get(selectorList.loginButton).click();
      cy.location('pathname').should('equal','/web/index.php/dashboard/index' );
      cy.get(selectorList.dashboardGrid);    

    })
    it('CT002- User - Login with Failure', () => {
      cy.visit('/auth/login');
      cy.get(selectorList.usernameField).type('Test');
      cy.get(selectorList.passwordField).type('Test');
      cy.get(selectorList.loginButton).click();
      cy.get(selectorList.wrongCredentialAlert);
    });
  })