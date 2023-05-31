import loggedhomePage from "../pages/loggedHomePage";

describe('Authorization', () => {

  it('Checks if login successfull', () => {
    cy.login()
    loggedhomePage.logoutBtn();
  })
})