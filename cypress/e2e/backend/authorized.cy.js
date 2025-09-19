/// <reference types="cypress" />

describe("Create user", () => {
  it("Authorize an user successfully", () => {
    cy.fixture("createUser").then((createUser) => {
      cy.authorized(createUser)
        .then(res => {
          expect(res.status).to.eq(200)
          expect(res.body).eq(true)
          expect(res.body).that.is.a("boolean")
        })
    })
  })

   it("Authorize an user without username and password", () => {
    cy.fixture("createUser").then((createUser) => {
      delete createUser.userName
      delete createUser.password

      cy.authorized(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Authorize an user without username", () => {
    cy.fixture("createUser").then((createUser) => {
      delete createUser.userName

      cy.authorized(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Authorize an user without password", () => {
    cy.fixture("createUser").then((createUser) => {
      delete createUser.password

      cy.authorized(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Authorize an user with empty username and password", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.userName = ""
      createUser.password = ""

      cy.authorized(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Authorize an user with empty username", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.userName = ""

      cy.authorized(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Authorize an user with empty password", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.password = ""

      cy.authorized(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Authorize an user with incorrect password", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.password = "123"

      cy.authorized(createUser)
        .then(res => {
          expect(res.status).to.eq(404)
          expect(res.body.code).eq("1207")
          expect(res.body.message).eq("User not found!")
        })
    })
  })
})