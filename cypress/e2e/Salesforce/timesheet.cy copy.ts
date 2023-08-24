describe('Meter Timesheet', () => {
	it('Crear y mandar timesheet', () => {
		cy.origin('/',() => {
  
})
cy.visit('/')

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
