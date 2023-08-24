describe('Meter Timesheet', () => {
	it('Crear y mandar timesheet', () => {
		cy.origin('/home',() => {
		})

cy.visit('/')

		// cy.get('#username').should('be.visible').type(
		// 	'.com')
		// 	cy.get('#password').should('be.visible').type(
		// 		'Sa3')
		// cy.contains('Log In').should('be.visible').click()
		// cy.contains('Remind Me Later').should('be.visible').click()

		// const loginUrl = '/'
		// const username = 'diego'
		// const password = 'Salesf'
		// cy.request(`${loginUrl}/?un=${username}&pw=${password}`)
		// .then(() => {
		//    cy.visit('/home')
		// })

		cy.salesforceLogin('username', 'password')
		
		
		cy.url().should('include', '/home')
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
