Cypress.on("uncaught:exception", (error, runnable) => {
    // returning false prevents Cypress from failing the tests
    return false
})

import './commands'
