describe('Browser tools navigation testing', () => {
	it('Enter QA Parking', () => {
		cy.viewport(1920, 1080)
		cy.visit('https://guest:guest-test@qa.parking.com')

		cy.get('#txtsearch').type('305 ontario')
		cy.get('#algolia-autocomplete-listbox-0')
			.should('be.visible')
			.and('contain', 'Parking Lot')
			.click()
		cy.wait(4000)
		cy.get(
			'.c-map-sidebar__panel-lot__info-left-title.mb-1.d-none.d-lg-block>a'
		).should('have.text', '305 W. ONTARIO')
	})
})
