// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
/*Cypress.Commands.add('login',() => {
  cy.request('https://www.saucedemo.com/', {timeout: 30000})
    //{enter} causes the form to submit
    cy.get('input[name=username]').type('standard_user{enter}')
  
    cy.get('input[name=password]').type('secret_sauce{enter}')
    
    // we should be redirected to /inventory.html
    cy.url().should('include', '/inventory.html')
  
    // our auth cookie should be present
    cy.getCookie('your-session-cookie').should('exist')
  
    // UI should reflect this user being logged in
   // cy.get('#shopping_cart_container').should('contain', '.shopping_cart_container')
  })*/
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })