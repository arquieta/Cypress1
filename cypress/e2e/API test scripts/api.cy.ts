describe('Api testing', () => {
	it('Get Request', () => {
		cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then(
            (response)=> {
            cy.log('response', response)  
        })
        
    })
     
             
         
    it('Post request', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {

        title: 'Fooberlegz',
        body: 'TestBody',
        userId: 1,
        }).then((response) => {
            cy.log('response', response)           
             })    
    })

    it('Put request', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 101,
        title: 'Fooberlegz',
        body: 'TestBody2',
        userId: 1,
        }).then((response) => {
            cy.log('response', response)           
             })    
    })

    it.only('Delete request', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', ).then((response) => {
            cy.log('response', response)           
             })    
    })
})


