describe('Validate diferent methods to use lists', () => {
	beforeEach(() => {
		cy.visitDemo()
	})
	it('Use direct approach for the list', () => {
		
		cy.get('.category-cards .card-body').contains('Interactions').click() .should('have.text', 'interactions')

		cy.get('.left-pannel .accordion .element-group .element-list.collapse.show .menu-list')
			// .should('be.visible')
			.find('li')
            .contains('Selectable')
			.click()

           // cy.get('.header-text').contains('Interactions').click()
		cy.wait(10000)
		
		})
        it('Use within for the list', () => {
		
            cy.get('.category-cards .card-body').contains('Interactions').click()
    
            cy.get('.left-pannel .accordion .element-group .element-list.collapse.show .menu-list').within(() => {
                // .should('be.visible')
                cy.get('#item-1')
                .click()
            })
    
               // cy.get('.header-text').contains('Interactions').click()
            cy.wait(10000)
            
            })

            it.only('Use within for the list', () => {
		
                cy.get('.category-cards .card-body').contains('Interactions').click()
        
                cy.get('.left-pannel .accordion .element-group .element-list.collapse.show .menu-list').within(() => {
                    // .should('be.visible')
                    cy.contains('Selectable')
                    .click()
                })
                cy.url().should('include', '/selectable')
                cy.get('ul#verticalListContainer li').should('be.visible')

                cy.get('#verticalListContainer li').each(($li) => {
                    const expectedText = $li.text();
                    
                    // Click on the option
                    $li.click();
                    
                    // Validate the correct text is being displayed
                    cy.get('.mt-2.list-group-item.active.list-group-item-action').should('have.text', expectedText);
                });
                // cy.get('ul#verticalListContainer').within(() => {
                //     cy.get('.mt-2.list-group-item.list-group-item-action').should('be.visible')
                //     cy.get('li:first-child .mt-2.list-group-item.list-group-item-action').should('be.visible')
                // })
                   // cy.get('.header-text').contains('Interactions').click()
                cy.wait(10000)
                
                })

	})
	
