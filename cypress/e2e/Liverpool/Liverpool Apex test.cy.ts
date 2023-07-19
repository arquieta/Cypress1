describe('Validar operaciones  en la calculadora de google', () => {
	
	beforeEach(() =>{
		
		cy.visitLiverpool();
		cy.title().then((title)=> {
			cy.log(title);
			expect(title).to.be.equal('Liverpool es parte de Mi vida')
		})
		cy.title().should('eq', 'Liverpool es parte de Mi vida')
		
	})
	
	it.only('Validar suma en google', () => {
		
		cy.get('#mainSearchbar').should('be.visible').type(
			'Pantalla LG OLED Smart TV de 55 pulgadas 4K{enter}')

		cy.contains('Pantalla LG OLED SMART TV de 55 pulgadas 4k/Dolby Atmos OLED55C2PSA con WebOS').should('be.visible').click({force: true})
		cy.get('.m-product__price-dw-promotion').should('not.be.empty').invoke('wholeText').then((price) => {
			// Store the value in a variable or use it as needed
			const copiedValue = price.trim();
			// You can also perform additional actions with the copied value
			// For example, log it to the Cypress command log
			cy.log(`Copied value: ${copiedValue}`);
		  });
		cy.get('#opc_pdp_buyNowButton').click({force: true})
		cy.wait(10000)
		cy.pageLogin('username', 'password')
		cy.buttonLogin().should('be.visible')

		cy.wait(15000)
		//cy.sendWhatsappCode()
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
	//cy.sendWhatsappCode()
	cy.get('.m-breakdownExpenses__detail').find('.m-breakdownExpenses__column--priceContainer"').should('have.text', '${copiedValue}')
	cy.contains('Finalizar compra').should('be.visible')
	cy.get('.a-checkout__titleProduct').should('eq', 'Pantalla LG Oled Smart TV de 55 pulgadas 4K/Dolby Atmos oled55b2psa con Webos')
	
})
