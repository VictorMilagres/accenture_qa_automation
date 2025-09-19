Cypress.on("uncaught:exception", (error, runnable) => {
    // returning false prevents Cypress from failing the tests
    return false
});

import './commands';
import 'cypress-plugin-api';
import 'cypress-drag-drop';