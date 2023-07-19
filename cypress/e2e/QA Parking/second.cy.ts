describe('Browser tools navigation testing', () => {
	beforeEach(() => {
		cy.visitHomepage()
	})
	it('Enter QA Parking', () => {
		cy.viewport(1920, 2080)

		cy.fixture('addresses').then(({ address1 }) => {
			cy.get('#txtsearch').type(address1)
		})

		cy.get('#algolia-autocomplete-listbox-0')
			.should('be.visible')
			.and('contain', 'Parking Lot')
			.click()
		cy.wait(4000)
		cy.get(
			'.c-map-sidebar__panel-lot__info-left-title.mb-1.d-none.d-lg-block>a'
		).should('have.text', '305 W. Ontario')
	})
	it('ewnter sencond page', () => {
		cy.fixture('addresses').then(({ address1 }) => {
			cy.get('#txtsearch').type(address1)
		})
	})
})