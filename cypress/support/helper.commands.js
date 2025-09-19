// Função utilitária (não é um command, é só helper)
function basicAuth(createUser = "createUser") {
  return cy.fixture(createUser).then((createUser) => {
    return `Basic ${btoa(`${createUser.userName}:${createUser.password}`)}`
  })
}

// Exporta para poder usar dentro dos commands
Cypress.Commands.add("basicAuth", (createUser = "createUser") => {
  return basicAuth(createUser)
})