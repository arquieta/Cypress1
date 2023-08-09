describe('Validar escenario pal Juanjo', () => {
	
	beforeEach(() =>{
		cy.viewport(1920, 1080)
	    cy.clearCookies()
	    cy.clearLocalStorage()
		cy.visit('http://demoqa.com/');
		cy.title().then((title)=> {
			cy.log(title);
			expect(title).to.be.equal('DEMOQA')
		})
		cy.title().should('eq', 'DEMOQA')
		
	})
	
	it('Validate that an element from a list is selected', () => {
		

        cy.get('.card.mt-4.top-card').contains('Interactions').click()
        cy.contains('Selectable').click()
        cy.get('ul#verticalListContainer li').contains('Cras justo odio').click()
        cy.get('ul#verticalListContainer li').contains('Cras justo odio').should('have.class', 'active')
		cy.wait(10000)

		
	})
    it('Validate that an element from a list is selected', () => {
		

        cy.get('.card.mt-4.top-card').contains('Interactions').click()
        cy.contains('Selectable').click()
        cy.get('ul#verticalListContainer li').contains('Cras justo odio').click().then((active)=> {
			cy.log(active);
			let activeClass = active.hasClass('active');
            expect(activeClass).to.be.true;
		})
        // Can we use the function to have right away the validation, in that case we're using javascript. Or we can do the next line to do the validation,
        //in which case we are using cypress framework.
        cy.get('ul#verticalListContainer li').contains('Cras justo odio').should('have.class', 'active')
		cy.wait(10000)

	})

    it.only('Validate that an element from a grid is selected', () => {
		
        
        cy.get('.card.mt-4.top-card').contains('Interactions').click()
        cy.contains('Selectable').click()
        cy.get('#listContainer').contains('Grid').click()
        cy.get('#gridContainer li').contains('Five').click().then((active)=> {
			cy.log(active);
			let activeClass = active.hasClass('active');
            expect(activeClass).to.be.true;
		}) 
        // Can we use the function to have right away the validation, in that case we're using javascript. Or we can do the next line to do the validation,
        //in which case we are using cypress framework.
        cy.get('#gridContainer li').contains('Five').should('have.class', 'active')
		cy.wait(10000)

	})
})

