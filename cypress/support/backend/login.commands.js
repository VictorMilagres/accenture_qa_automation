const env = Cypress.env("ENV")

Cypress.Commands.add("login", (createUser) => {
    cy.api({
        method: 'POST',
        failOnStatusCode: false,
        url: `${Cypress.env(env).api_account}/Login`,
        body: createUser
    }).then((res) => {
      if(res.body.status === false) {
        expect(res.status).eq(400)
      } else {
        Cypress.env("userId", res.body.userId)
      }
    })
})