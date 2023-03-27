describe('Rinvoq user journey', function() {
    it('Visits Rinvoq', function() {
      cy.visit('https://www.rinvoq.eu') 
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

    })
})