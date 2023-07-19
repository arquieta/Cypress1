describe('Meter Timesheet', () => {
	it('Crear y mandar timesheet', () => {
		cy.origin('https://umbrage.lightning.force.com/lightning/page/home',() => {
		})

cy.visit('https://umbrage.my.salesforce.com/')

		// cy.get('#username').should('be.visible').type(
		// 	'diego.arquieta@umbrage.com')
		// 	cy.get('#password').should('be.visible').type(
		// 		'Salesforce.5813')
		// cy.contains('Log In').should('be.visible').click()
		// cy.contains('Remind Me Later').should('be.visible').click()

		// const loginUrl = 'https://umbrage.my.salesforce.com/'
		// const username = 'diego.arquieta@umbrage.com'
		// const password = 'Salesforce.5813'
		// cy.request(`${loginUrl}/?un=${username}&pw=${password}`)
		// .then(() => {
		//    cy.visit('https://umbrage.lightning.force.com/lightning/page/home')
		// })

		cy.salesforceLogin('username', 'password')
		
		
		cy.url().should('include', 'https://umbrage.lightning.force.com/lightning/page/home')
		cy.contains('Time Entry').should('be.visible').click()
		cy.get('#button-1144-btnInnerEl').should('be.visible').click()
		cy.get('#combo-1148-inputEl').type('Unassigned Time - Mexico')
		cy.get('td.f-grid-cell.f-grid-td.f-grid-cell-weekDay2.f-unselectable')
  			.find('input') // assuming that the field is an input element
 			.type('8')
		cy.get('[data-columnid="weekDay3"]')
			 .find('input') // assuming that the field is an input element
			 .type('8')


		
	
})
})
