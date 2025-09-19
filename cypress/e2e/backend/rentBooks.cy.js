/// <reference types="cypress" />

describe("Rent books", () => {
  before(() => {
    cy.fixture("createUser").then((createUser) => {
      cy.login(createUser)
    })

    cy.listBooks()
      .then(res => {
        Cypress.env("book1", res.body.books[0].isbn)
        Cypress.env("book2", res.body.books[1].isbn)
      })
  })

  it("Rent books successfully", () => {
    cy.fixture("rentBooks").then((rentBooks) => {
      rentBooks.userId = Cypress.env("userId")
      rentBooks.collectionOfIsbns[0].isbn = Cypress.env("book1")
      rentBooks.collectionOfIsbns[1].isbn = Cypress.env("book2")

      cy.rentBooks(rentBooks)
        .then(res => {
          expect(res.status).to.eq(201)
          expect(res.body.books[0].isbn).eq(Cypress.env("book1"))
          expect(res.body.books[1].isbn).eq(Cypress.env("book2"))
        })
    })
  })

  it("Rent books without collection Of Isbns", () => {
    cy.fixture("rentBooks").then((rentBooks) => {
      rentBooks.userId = Cypress.env("userId")
      delete rentBooks.collectionOfIsbns[0].isbn
      delete rentBooks.collectionOfIsbns[1].isbn

      cy.rentBooks(rentBooks)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1205")
          expect(res.body.message).eq("Something went wrong! Please try again later.")
        })
    })
  })

    it("Rent books with empty userId", () => {
    cy.fixture("rentBooks").then((rentBooks) => {
      rentBooks.userId = ""
      rentBooks.collectionOfIsbns[0].isbn = Cypress.env("book1")
      rentBooks.collectionOfIsbns[1].isbn = Cypress.env("book2")

      cy.rentBooks(rentBooks)
        .then(res => {
          expect(res.status).to.eq(401)
          expect(res.body.code).eq("1207")
          expect(res.body.message).eq("User Id not correct!")
        })
    })
  })
})