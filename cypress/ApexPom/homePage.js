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
  
    searchProduct(productName) {
      cy.get('#mainSearchbar').should('be.visible').type(`${productName}{enter}`);
    }
  }
  export default HomePage;