/// <reference types="cypress" />

describe("Create user", () => {
  it("Create an user with valid data", () => {
    cy.fixture("createUser").then((createUser) => {
        cy.createUser(createUser)
          .then(res => {
            expect(res.status).to.eq(201)
            expect(res.body.userID).is.not.empty
            expect(res.body.username).eq("victormilagres1")
          })
      })
  })

  it("Create an user without username and password", () => {
    cy.fixture("createUser").then((createUser) => {
      delete createUser.userName
      delete createUser.password

      cy.createUser(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Create an user without username", () => {
    cy.fixture("createUser").then((createUser) => {
      delete createUser.userName

      cy.createUser(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Create an user without password", () => {
    cy.fixture("createUser").then((createUser) => {
      delete createUser.password

      cy.createUser(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Create an user with empty username and password", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.userName = ""
      createUser.password = ""

      cy.createUser(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Create an user with empty username", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.userName = ""

      cy.createUser(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Create an user with empty password", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.password = ""

      cy.createUser(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1200")
          expect(res.body.message).eq("UserName and Password required.")
        })
    })
  })

  it("Create an user with insecure password", () => {
    cy.fixture("createUser").then((createUser) => {
      createUser.password = "123"

      cy.createUser(createUser)
        .then(res => {
          expect(res.status).to.eq(400)
          expect(res.body.code).eq("1300")
          expect(res.body.message).eq("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")
        })
    })
  })

  it("Create an user already exist", () => {
    cy.fixture("createUser").then((createUser) => {
        cy.createUser(createUser)
          .then(res => {
            expect(res.status).to.eq(406)
            expect(res.body.code).eq("1204")
            expect(res.body.message).eq("User exists!")
          })
      })
  })

  after(() => {
    cy.fixture("createUser").then((createUser) => {
      cy.login(createUser)
    })

    cy.deleteUser();
  });
});