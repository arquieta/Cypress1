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
		pageLogin(username, password): Chainable<Element>
		
	}
}





Cypress.Commands.add('pageLogin', (username, password) => {
	cy.fixture('example').then(example => {
		const username = example.username
		const password = example.password

		cy.get('#username').type(username)
		cy.get('#password').type(password)
	})
})
