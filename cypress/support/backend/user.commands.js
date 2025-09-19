const env = Cypress.env("ENV")

Cypress.Commands.add("createUser", (createUser) => {
    cy.api({
        method: 'POST',
        failOnStatusCode: false,
        url: `${Cypress.env(env).api_account}/User`,
        body: createUser
    })
})

Cypress.Commands.add("userById", (createUser) => {
    cy.basicAuth("createUser").then((basicAuth) => {
        cy.api({
            method: 'GET',
            failOnStatusCode: false,
            url: `${Cypress.env(env).api_account}/User/${Cypress.env("userId")}`,
            body: createUser,
            headers: {
                Authorization: basicAuth
            }
        })
    })
})