describe('Home page', function () {
  it('Home page can be opened', function () {
    cy.visit('http://localhost:3000')
    cy.contains('Countries')
  })

  it('Can navigate to About page', function () {
    cy.visit('http://localhost:3000')
    cy.contains('About').click()
    cy.contains('This is the about page..')
  })
})
