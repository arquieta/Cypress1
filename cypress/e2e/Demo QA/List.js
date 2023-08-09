describe('Validate diferent methods to use lists', () => {
	beforeEach(() => {
		cy.visitDemo()
	})
	it('Use direct approach for the list', () => {
		
		cy.get('.category-cards .card-body').contains('Interactions').click()

		cy.get('.left-pannel .accordion .element-group .element-list.collapse.show .menu-list')
			// .should('be.visible')
			.find('li')
            .contains('Selectable')
			.click()

           // cy.get('.header-text').contains('Interactions').click()
		cy.wait(10000)
		
		})
        it.only('Use within for the list', () => {
		
            cy.get('.category-cards .card-body').contains('Interactions').click()
    
            cy.get('.left-pannel .accordion .element-group .element-list.collapse.show .menu-list').within(() => {
                // .should('be.visible')
                cy.get('#item-1')
                .click()
            })
    
               // cy.get('.header-text').contains('Interactions').click()
            cy.wait(10000)
            
            })

	})
	
