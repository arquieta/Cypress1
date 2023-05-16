describe('Validar operaciones  en la calculadora de google', () => {
	it('Validar suma en google', () => {
		cy.visitLiverpool()


		cy.get('#mainSearchbar').should('be.visible').type(
			'Pantalla LG OLED Smart TV de 55 pulgadas 4K{enter}'
		)
		cy.contains('Pantalla LG OLED SMART TV de 55 pulgadas 4k/Dolby Atmos OLED55C2PSA con WebOS').should('be.visible').click()
		cy.get('#opc_pdp_buyNowButton').click({force: true})
		cy.wait(10000)
		cy.pageLogin('username', 'password')
		cy.buttonLogin().should('be.visible').click({force: true})
		cy.wait(5000)
		cy.sendWhatsappCode()
		cy.contains('Finalizar compra').should('be.visible')
		cy.get('.a-checkout__titleProduct').should('eq', 'Pantalla LG Oled Smart TV de 55 pulgadas 4K/Dolby Atmos oled55b2psa con Webos')
		
	})
})

it('Validar resta en google', () => {
	cy.visitLiverpool()

{}
	cy.get('#mainSearchbar').should('be.visible').type(
		'Pantalla LG OLED Smart TV de 55 pulgadas 4K{enter}'
	)
	cy.contains('Pantalla LG OLED SMART TV de 55 pulgadas 4k/Dolby Atmos OLED55C2PSA con WebOS').should('be.visible').click()
	cy.get('#opc_pdp_buyNowButton').click({force: true})
	cy.wait(10000)
	cy.pageLogin('username', 'password')
	cy.buttonLogin().should('be.visible').click({force: true})
	cy.wait(5000)
	cy.sendWhatsappCode()
	cy.contains('Finalizar compra').should('be.visible')
	cy.get('.a-checkout__titleProduct').should('eq', 'Pantalla LG Oled Smart TV de 55 pulgadas 4K/Dolby Atmos oled55b2psa con Webos')
	
})
