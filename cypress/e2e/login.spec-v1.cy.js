describe('Orange HRM Tests', () => {

  it.skip('CST001-Login with Sucess', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.location('pathname').should('equal','/web/index.php/dashboard/index' );
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard');    
    })
    it('CT002-Login with Failure', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get("[name='username']").type('Test');
      cy.get("[name='password']").type('Test');
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert');
    });
  })