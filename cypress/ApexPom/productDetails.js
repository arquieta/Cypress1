class ProductDetails {
    validateProductDetails(product) {
      cy.get('h3').should('contain.text', product['Nombre del producto']);
      cy.get('.a-card-price').should('contain.text', product['Precio original']);
      cy.get('.a-card-discount').should('contain.text', product['Precio con descuento']);
      cy.get('img').should('have.attr', 'src', product['URL de la imagen']);
      cy.get('a').should('have.attr', 'href', product['URL del producto']);

      
    }
    clickBuyNow() {
      cy.get('#opc_pdp_buyNowButton').click({ force: true });
    }
  }
  export default ProductDetails;
  