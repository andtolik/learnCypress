/// <reference types="cypress" />

describe('My First Test', () => {
  it('Logged into', () => {
    cy.visit('https://www.demoblaze.com')
    //{enter} causes the form to submit
    cy.get('#login2').click()
    .wait(1000)
    cy.get('#loginusername')
      .type('Tolik')
      
    cy.get('#loginpassword')
      .type('Qwerty')
        
  cy.contains('[class="btn btn-primary"]', 'Log in').click()
  .wait(4000)

  cy.get('#logout2')
    .should('contain', 'Log out')
  })
})