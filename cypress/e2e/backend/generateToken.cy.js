/// <reference types="cypress" />

describe("Create user", () => {
  it("Generate a token successfully", () => {
    cy.fixture("createUser").then((createUser) => {
      cy.generateToken(createUser)
        .then(res => {
          expect(res.status).to.eq(200)
          expect(res.body.token).is.not.empty
          expect(res.body.expires).is.not.empty
          expect(res.body.status).eq("Success")
          expect(res.body.result).eq("User authorized successfully.")
        })
    })
  })

   it("Generate a token without username and password", () => {
    cy.fixture("createUser").then((createUser) => {
      delete createUser.userName
      delete createUser.password

      cy.generateToken(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Generate a token without username", () => {
    cy.fixture("createUser").then((createUser) => {
      delete createUser.userName

      cy.generateToken(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Generate a token without password", () => {
    cy.fixture("createUser").then((createUser) => {
      delete createUser.password

      cy.generateToken(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Generate a token with empty username and password", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.userName = ""
      createUser.password = ""

      cy.generateToken(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Generate a token with empty username", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.userName = ""

      cy.generateToken(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Generate a token with empty password", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.password = ""

      cy.generateToken(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Generate a token with incorrect password", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.password = "123"

      cy.generateToken(createUser)
        .then(res => {
          expect(res.status).to.eq(200)
          expect(res.body.token).null
          expect(res.body.expires).null
          expect(res.body.status).eq("Failed")
          expect(res.body.result).eq("User authorization failed.")
        })
    })
  })
})