describe('Validar escenario pal Juanjo', () => {
	
	beforeEach(() =>{
		
		cy.visit('http://zero.webappsecurity.com/');
		cy.title().then((title)=> {
			cy.log(title);
			expect(title).to.be.equal('Zero - Personal Banking - Loans - Credit Cards')
		})
		cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
		
	})
	
	it.only('Transportation debe pasar a ser no visible', () => {
		cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')

		//Aquí hacemos login
		cy.zeroLogin()

		//aquí empieza el menu
		cy.contains('Account Activity').click()
		cy.contains('My Money Map').click()

		//Aquí buscamos en el pastel primero que esté visible transportation
		cy.get('#ext-gen1130').find('#ext-sprite-1271').contains('Transportation').should('be.visible')

		//aquí marcamos transportation en las opciones para ocultarlo e el pastel
		cy.get('#ext-sprite-1151').should('be.visible').and('have.text', 'Transportation').click()
		//Aquí buscamos en el pastel ahora que no esté visible transportation
		cy.get('#ext-sprite-1271').contains('Transportation').should('not.be.visible')
		

	})
})

