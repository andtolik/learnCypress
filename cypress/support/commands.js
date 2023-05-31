/* For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
*/
import loginModal from "../pages/loginModal";

Cypress.Commands.add('login',() => {
  cy.visit(Cypress.env('Url'));
  loginModal.openLoginModal();
  loginModal.UsernameEntry();
  loginModal.pwEntry();     
  loginModal.modalLoginBtnClick();
 })