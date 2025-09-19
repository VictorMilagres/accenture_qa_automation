/// <reference types="cypress" />

describe("Rent books", () => {
  beforeEach(() => {
    cy.fixture("createUser").then((createUser) => {
      cy.login(createUser)
    })
  })

  it("List specific user details ", () => {
      cy.userById()
        .then(res => {
          expect(res.status).to.eq(200)
          expect(res.body.userId).eq(Cypress.env("userId"))
          expect(res.body.username).eq("victormilagres1")
          expect(res.body.books).length(2)
        })
  })
})

