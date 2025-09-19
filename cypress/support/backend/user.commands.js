const env = Cypress.env("ENV")

Cypress.Commands.add("createUser", (createUser) => {
    cy.api({
        method: 'POST',
        failOnStatusCode: false,
        url: `${Cypress.env(env).api_account}/User`,
        body: createUser
    })
})

Cypress.Commands.add("userById", () => {
    cy.basicAuth("createUser").then((basicAuth) => {
        cy.api({
            method: 'GET',
            failOnStatusCode: false,
            url: `${Cypress.env(env).api_account}/User/${Cypress.env("userId")}`,
            headers: {
                Authorization: basicAuth
            }
        })
    })
})

Cypress.Commands.add("deleteUser", () => {
    cy.basicAuth("createUser").then((basicAuth) => {
        cy.api({
            method: 'DELETE',
            failOnStatusCode: false,
            url: `${Cypress.env(env).api_account}/User/${Cypress.env("userId")}`,
            headers: {
                Authorization: basicAuth
            }
        })
    })
})