import productos from '../fixtures/productos.json'

describe('Apex Liverpool', () => {

	it.only('Buscar Ps5 en Liverpool', () => {
		const producto = productos.productos[0]
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
	cy.get(`ul.m-product__listingPlp li[data-prodid="${producto['ID del producto']}"]`)
	.within(() => {
	  // Validar nombre del producto
	  cy.get('h3').should('contain.text', producto['Nombre del producto']);

	  // Validar precio original
	  cy.get('.a-card-price').should('contain.text', producto['Precio original']);

	  // Validar precio con descuento
	  cy.get('.a-card-discount').should('contain.text', producto['Precio con descuento']);

	  // Validar URL de la imagen
	  cy.get('img').should('have.attr', 'src', producto['URL de la imagen']);

	  // Validar URL del producto
	  cy.get('a').should('have.attr', 'href', producto['URL del producto']);
	
  })
  .find('a') // Seleccionar el enlace dentro del `li`
  .click(); // Hacer clic en el enlace.




	
	cy.wait(5000)
	
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