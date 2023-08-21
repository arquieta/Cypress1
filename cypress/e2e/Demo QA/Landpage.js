describe('Validate landing page works as expected', () => {
	beforeEach(() => {
		cy.visitDemo()
	})
	it('Use direct approach for the list', () => {
		
		cy.get('.category-cards .card-body').contains('Elements')
        cy.get('.category-cards .card-body').contains('Forms')
        cy.get('.category-cards .card-body').contains('Alerts, Frame & Windows')
        cy.get('.category-cards .card-body').contains('Widgets')
        cy.get('.category-cards .card-body').contains('Interactions')
        cy.get('.category-cards .card-body').contains('Book Store Application')
        cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')

		
		
		})


  it('Validate that all elements in menu are displayed', () => {
		
    cy.get('.category-cards .card-body').contains('Elements').click()
    cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
      // Get the expected text based on the index or any other criteria
      const expectedTexts = [
      "Text Box",
      "Check Box",
      "Radio Button",
      "Web Tables",
      "Buttons",
      "Links",
      "Broken Links - Images",
      "Upload and Download",
      "Dynamic Properties",

    ];
          
// Use .eq(index) to target the specific element-group
cy.wrap($elementGroup)
  .should("contain.text", expectedTexts[index])
  .and("be.visible");
})
cy.go('back')
cy.get('.category-cards .card-body').contains('Forms').click()
cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
    // Get the expected text based on the index or any other criteria
    const expectedTexts = [
      "Practice Form",                     
    ];

    // Use .eq(index) to target the specific element-group
    cy.wrap($elementGroup)
      .should("contain.text", expectedTexts[index])
      .and("be.visible");
    })
    cy.go('back')

    cy.get('.category-cards .card-body').contains('Alerts, Frame & Windows').click()
    cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
        // Get the expected text based on the index or any other criteria
        const expectedTexts = [
          "Browser Windows",
          "Alerts",
          "Frames",
          "Nested Frames",
          "Modal Dialogs",       
        ];
  
        // Use .eq(index) to target the specific element-group
        cy.wrap($elementGroup)
          .should("contain.text", expectedTexts[index])
          .and("be.visible");
        })
        cy.go('back')

cy.get('.category-cards .card-body').contains('Widgets').click()
cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
    // Get the expected text based on the index or any other criteria
    const expectedTexts = [
      "Accordian",
      "Auto Complete",
      "Date Picker",
      "Silder",
      "Progress Bar",
      "Tabs",
      "Tool Tips",
      "Menu",
      "Select Menu",

    ];

    // Use .eq(index) to target the specific element-group
    cy.wrap($elementGroup)
      .should("contain.text", expectedTexts[index])
      .and("be.visible");
    })
    cy.go('back')

    cy.get('.category-cards .card-body').contains('Interactions').click()
cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
    // Get the expected text based on the index or any other criteria
    const expectedTexts = [
      "Sortable",
      "Selectable",
      "Resizable",
      "Droppable",
      "Dragabble",
                  
    ];

    // Use .eq(index) to target the specific element-group
    cy.wrap($elementGroup)
      .should("contain.text", expectedTexts[index])
      .and("be.visible");
    })
    cy.go('back')
    cy.get('.category-cards .card-body').contains('Book Store Application').click()
    cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
        // Get the expected text based on the index or any other criteria
        const expectedTexts = [
          "Login",
          "Book Store",
          "Profile",
          "Book Store API",               
        ];
  
        // Use .eq(index) to target the specific element-group
        cy.wrap($elementGroup)
          .should("contain.text", expectedTexts[index])
          .and("be.visible");
        })
        cy.go('back')


    cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')

    
    
    })

    it.only('Validate that all elements in menu are displayed', () => {

      cy.validateMenu()
      cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')
      
      })

      it.only('Login', () => {
		
        cy.get('.category-cards .card-body').contains('Elements')
            cy.get('.category-cards .card-body').contains('Forms')
            cy.get('.category-cards .card-body').contains('Alerts, Frame & Windows')
            cy.get('.category-cards .card-body').contains('Widgets')
            cy.get('.category-cards .card-body').contains('Interactions')
            cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')
            cy.get('.category-cards .card-body').contains('Book Store Application').click()
            cy.contains('Login').click()
            cy.fixture('example').then(({ email }) => {
              cy.get('#userName').type(email)
              })
            


    
        
        
        })
      



    })