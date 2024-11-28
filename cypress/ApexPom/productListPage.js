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
        cy.contains('label', tamaño)
            .should('be.visible')
        // Validar y hacer clic en la opción de tamaño "55 pulgadas"
        cy.get('#variants\\.normalizedSize-55\\ pulgadas')
          .should('have.attr', 'id', 'variants.normalizedSize-55 pulgadas') // Verifica el ID del elemento
          .click({ force: true });

    })

  }

  validateAndClickBrand(marca) {
    // Verificar que el elemento contenedor del filtro existe y está visible
    cy.get('.o-aside').within(() => {
      //ver todas las opciones
      cy.get('#Marcas').scrollIntoView().click()
      
      cy.wait(5000)
      cy.contains('label', marca).scrollIntoView()
        .should('be.visible')
    })
    cy.get(`#brand-${marca}`)
  .scrollIntoView()
  .click({ force: true });
}

validateAndClickPrice(precio) {
  // Verificar que el elemento contenedor del filtro existe y está visible
  cy.get('.o-aside > :nth-child(23)').within(() => {
    //ver todas las opciones
    
    cy.wait(5000)
    cy.contains('label', precio).scrollIntoView()
      .should('be.visible')
  })
  cy.get('#variants\\.prices\\.sortPrice-5000-10000')
.scrollIntoView()
.click({ force: true });
}

validateFiltersApplied(filter1, filter2, filter3) { 

  cy.get('.plp-filters-container .mdc-chip__text')
  .should(($texts) => {
    const sizeText = $texts.text();
    // Validar que contiene '55 pulgadas' y '10000'
    expect(sizeText).to.include(filter1);
    expect(sizeText).to.include(filter2);
    expect(sizeText).to.include(filter3);
  })
  .should('be.visible');
}
validateAmountOfResults(cantidadDeProductos) {

  cy.get('.a-plp-results-title')
  .should('have.text', cantidadDeProductos)
  .and('be.visible')
}

}
  

  export default ProductListPage;
  