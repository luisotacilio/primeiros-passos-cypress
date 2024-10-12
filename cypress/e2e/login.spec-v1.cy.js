
import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

    it('CST001-Login with Sucess', () => {
      cy.visit('/auth/login');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.location('pathname').should('equal','/web/index.php/dashboard/index' );
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard');    
    })
    it('CT002-Login with Failure', () => {
      cy.visit('/auth/login');
      cy.get("[name='username']").type('Test');
      cy.get("[name='password']").type('Test');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert');
    });
  })