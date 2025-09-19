/// <reference types="cypress" />

describe("List books", () => {
  it("List all books created", () => {
      cy.listBooks()
        .then(res => {
          expect(res.status).to.eq(200)
          expect(res.body.books[0].isbn).is.not.empty
          expect(res.body.books[0].title).is.not.empty
          expect(res.body.books[0].subTitle).is.not.empty
          expect(res.body.books[0].author).is.not.empty
          expect(res.body.books[0].publish_date).is.not.empty
          expect(res.body.books[0].publisher).is.not.empty
          expect(res.body.books[0].pages).that.is.a("number")
          expect(res.body.books[0].description).is.not.empty
          expect(res.body.books[0].website).is.not.empty
          expect(res.body.books).length(8)
        })
    })
})