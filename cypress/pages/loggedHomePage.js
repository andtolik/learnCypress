class loggedHomePage{
    elements={
        logoutBtnId : () => cy.get('#logout2')
    }

logoutBtn(){
    this.elements.logoutBtnId().should('contain', 'Log out');
}
}
module.exports = new loggedHomePage();