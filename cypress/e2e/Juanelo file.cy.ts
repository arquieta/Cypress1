describe('Validar escenario pal Juano', () => {
	it.only('Transportation debe pasar a ser no visible', () => {


		cy.visit('http://zero.webappsecurity.com/')

		//Auí hacemos login
		cy.contains('Signin').should('be.visible').click()
		cy.get('#user_login').type('username')
		cy.get('#user_password').type('password')
		cy.get('input[type="submit"]').click()

		//aquí empieza el menu
		cy.contains('Account Activity').click()
		cy.contains('My Money Map').click()

		//Aquí buscamos en el pastel primero que esté visible transportation
		cy.get('#ext-gen1130').should('be.visible').find('#ext-sprite-1271').contains('Transportation')

		//aquí marcamos transportation en las opciones para ocultarlo e el pastel
		cy.get('#ext-sprite-1151').should('be.visible').and('have.text', 'Transportation').click()
		//Aquí buscamos en el pastel ahora que no esté visible transportation
		cy.get('#ext-sprite-1271').should('not.be.visible').contains('Transportation')
		

	})
})

