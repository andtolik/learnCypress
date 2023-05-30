/// <reference types="cypress" />

import loginModal from "../../pages/loginModal"
describe('Authorization', () => {

  it('Checks if login successfull', () => {
    cy.visit(Cypress.env('Url'))
  
    loginModal.loginNverify();

  })
})