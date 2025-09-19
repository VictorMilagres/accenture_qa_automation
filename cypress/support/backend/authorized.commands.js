const env = Cypress.env("ENV")

Cypress.Commands.add("authorized", (createUser) => {
    cy.api({
        method: 'POST',
        failOnStatusCode: false,
        url: `${Cypress.env(env).api_account}/Authorized`,
        body: createUser
    })
})