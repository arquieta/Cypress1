describe('Validar operaciones  en la calculadora de google', () => {
	it.only('Buscar Ps5 en Liverpool', () => {
		//cy.visitLiverpool()
		cy.visit('https://www.liverpool.com.mx/tienda/home', {
			failOnStatusCode: false,
			headers: {
			  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
			  'Referer': 'https://www.google.com/',
			  'Accept-Language': 'es-MX,es;q=0.9,en;q=0.8',
			},
		  });
		  

		cy.get('#mainSearchbar').should('be.visible').type(
			'playstation{enter}')
		cy.wait(5000)

// Selecciona la lista de productos
    cy.get('ul.m-product__listingPlp').then(($ul) => {
      // Valida que hay al menos un elemento con "Consola PS5"
      const hasConsolaPS5 = $ul.find('li:contains("Consola PS5")').length > 0;
      expect(hasConsolaPS5).to.be.true;

      // Valida que hay al menos un elemento con "Para PS5"
      const hasParaPS5 = $ul.find('li:contains("para PS5")').length > 0;
      expect(hasParaPS5).to.be.true;
    });
	
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

it('Validar Escenarios de Liverpool', () => {
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
