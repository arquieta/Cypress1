class HomePage {
    visit() {
      cy.visit('https://www.liverpool.com.mx/tienda/home', {
        failOnStatusCode: false,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'Referer': 'https://www.google.com/',
          'Accept-Language': 'es-MX,es;q=0.9,en;q=0.8',
        },
      });
    }

    validateAndClickCategorias() {
      // Localizar el elemento "Categorías"
      cy.get('span.a-header__strongLink.nav-desktop-menu-action')
          .contains('Categorías') // Validar que el texto contiene "Categorías"
          .should('be.visible') // Validar que está visible
          .click(); // Hacer clic en el elemento
  }

  displayCategory(category) {
    cy.get('div#categories-sidebarMenu') // Encuentra el contenedor principal
    .find('li[data-submenu-id="CAT5020010"]')   // Filtra los elementos <li> con la clase específica
  .contains('a', category).trigger('mouseover', { force: true })         
  }
  clickSubmenuOption(menuOption) {
      // Hacer clic en la opción del submenú dinámica
      cy.contains('.nmm-content a', menuOption)
      .click();
  }
  

  
    searchProduct(productName) {
      cy.get('#mainSearchbar').should('be.visible').type(`${productName}{enter}`);
    }
  }
  export default HomePage;