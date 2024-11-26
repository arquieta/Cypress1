class ProductListPage {
    validateProductListContains(text) {
      cy.get('ul.m-product__listingPlp').then(($ul) => {
        const hasProduct = $ul.find(`li:contains("${text}")`).length > 0;
        expect(hasProduct).to.be.true;
      });
    }
  
    selectProductById(productId) {
      return cy.get(`ul.m-product__listingPlp li[data-prodid="${productId}"]`);
    }

    validateFilterSize() {
      // Validar el filtro de Tamaño
      cy.get(':nth-child(25) > .a-plp__btnFilter > .a-title__filter')
        .should('be.visible') // Verifica que el elemento es visible
        .find('label') // Encuentra la etiqueta <label> dentro del selector
        .should('have.text', 'Tamaño'); // Valida que contiene el texto "Tamaño"
    }

    validateFilterPrice() {
      
      // Validar el filtro de Precios
      cy.get(':nth-child(27) > .a-plp__btnFilter > .a-title__filter')
        .should('be.visible') // Verifica que el elemento es visible
        .find('label') // Encuentra la etiqueta <label> dentro del selector
        .should('have.text', 'Precios'); // Valida que contiene el texto "Precios"
    }

    validateAndClickSize(tamaño) {
      // Verificar que el elemento contenedor del filtro existe y está visible
      cy.get('.o-aside > :nth-child(25)').within(() => {
        //ver todas las opciones
        cy.get('#Tamao').click()
        cy.wait(5000)
        // Validar y hacer clic en la opción de tamaño "55 pulgadas"
        cy.get('#variants\\.normalizedSize-55\\ pulgadas')
          //.should('be.visible') // Verifica que el elemento está visible
          .should('have.attr', 'id', 'variants.normalizedSize-55 pulgadas') // Verifica el ID del elemento
          .click()
    })

  }
}
  

  export default ProductListPage;
  