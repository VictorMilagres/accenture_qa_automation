const env = Cypress.env("ENV")

Cypress.Commands.add("listBooks", () => {
    cy.api({
        method: 'GET',
        failOnStatusCode: false,
        url: `${Cypress.env(env).api_bookstore}/Books`,
    })
})

Cypress.Commands.add("rentBooks", (rentBooks) => {
  cy.basicAuth("createUser").then((basicAuth) => {
    cy.api({
      method: "POST",
      failOnStatusCode: false,
      url: `${Cypress.env(env).api_bookstore}/Books`,
      body: rentBooks,
      headers: {
        Authorization: basicAuth
      }
    })
  })
})