const env = Cypress.env("ENV")

Cypress.Commands.add("generateToken", (createUser) => {
    cy.api({
        method: 'POST',
        failOnStatusCode: false,
        url: `${Cypress.env(env).api_account}/GenerateToken`,
        body: createUser
    })
})