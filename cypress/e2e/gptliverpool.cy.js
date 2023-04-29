describe('Add item to cart', () => {
    it('should add an item to the cart', () => {
        cy.visitLiverpool()
  
      // Enter search query and submit
      cy.get('#mainSearchbar').type('nintendo switch{enter}')
  
      // Click on the first search result
      cy.get('.plp-product__info a').first().click()
  
      // Select a variation (if applicable)
      cy.get('.product__sku').then(($el) => {
        if ($el.text().includes('Variante')) {
          cy.get('.product__sku').click()
          cy.get('.sku-dropdown__options li').first().click()
        }
      })
  
      // Add item to cart
      cy.get('.product__add-to-cart .button__main').click()
  
      // Verify item was added to cart
      cy.get('.cart__items-count').should('have.text', '1')
    })



    it('should add an item to the cart', () => {
      cy.visitLiverpool()

    // Enter search query and submit
    cy.get('#mainSearchbar').type('nintendo switch{enter}')

    // Click on the first search result
    cy.get('.plp-product__info a').first().click()

    // Select a variation (if applicable)
    cy.get('.product__sku').then(($el) => {
      if ($el.text().includes('Variante')) {
        cy.get('.product__sku').click()
        cy.get('.sku-dropdown__options li').first().click()
      }
    })

    // Add item to cart
    cy.get('.product__add-to-cart .button__main').click()

    // Verify item was added to cart
    cy.get('.cart__items-count').should('have.text', '1')
  })
  })