class loginModal{
    elements={
        loginBtn : () => cy.get("#login2"),
        usernameField : () => cy.get('#loginusername'),
        pwField : () => cy.get('#loginpassword'),
        modalLogInBtn : () => cy.contains('[class="btn btn-primary"]', 'Log in'),
    }

    openLoginModal() {
    this.elements.loginBtn().click();
    }

    UsernameEntry() {
    this.elements.usernameField().type(Cypress.env('Username'));
    }

    pwEntry(){
    this.elements.pwField().type(Cypress.env('Password'));
    }

    modalLoginBtnClick(){
    this.elements.modalLogInBtn().click();
    }
}
module.exports = new loginModal();