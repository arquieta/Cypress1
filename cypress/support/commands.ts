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
// Cypress.Commands.add('login', (email, password) => { ... })
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
//declare global {
 //   namespace Cypress { 
   //     interface Chainable {
     //       login(email: String, password: string): Chainable<void>;
//
  //      }
    //}
//}
declare namespace Cypress {
	interface Chainable {
		/**
		 * @param address1 - takes first address to use
		 */
		visitHomepage(): Chainable<Element>
		pageLogin(): Chainable<Element>
		visitLiverpool(): Chainable<Element>
	}
}

Cypress.Commands.add('visitHomepage', () => {
	cy.visit('https://guest:guest-test@qa.parking.com')
})




