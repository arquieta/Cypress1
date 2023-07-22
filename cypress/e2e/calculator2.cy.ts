describe('Validate operations in google calculator', () => {
	
	beforeEach(() => {
		cy.visit('https://www.google.com')
		cy.get('#APjFqb').should('be.visible').type(
			'Calculator{Enter}'
)
		
	})
	
	it('Validate sum in google', () => {
		
cy.get('.Uo8X3b.OhScic.zsYMe').contains("Resultado de calculadora")	
	cy.get('.z7BZJb.XSNERd').type('5')
	cy.contains('+')
		.should('have.attr', 'aria-label', 'más')
		.click()
	cy.get('.z7BZJb.XSNERd').type('3')	
	//cy.contains('=')
	//	.should('have.attr', 'aria-label', 'igual')
	//	.click()
	cy.get('[aria-label="igual"]').click()
	cy.get('.vUGUtc').should('have.text','5 + 3 =' )
	cy.get('.z7BZJb.XSNERd').contains("8").should('be.visible')
	})

	it('Validate substract in google', () => {
		
		cy.get('.Uo8X3b.OhScic.zsYMMe').contains("Resultado de calculadora")	
			cy.get('.z7BZJb.XSNERd').type('5')
			//cy.contains('−')
			//.should('have.attr', 'aria-label', 'menos')
			//.click()
			cy.get('[aria-label="menos"]').click()
			cy.get('.z7BZJb.XSNERd').type('3')	
			cy.get('[aria-label="igual"]').click()
			cy.get('.vUGUtc').should('have.text','5 - 3 =')
			cy.get('.z7BZJb.XSNERd').contains("2").should('be.visible')
			})

			
})

	