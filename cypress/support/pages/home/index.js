import { el } from "./elements.js";

class HomePage {
  access() {
    const env = Cypress.env("ENV")
    cy.visit(Cypress.env(env).demoqa);
  };

  accessCards(cardName) {
    cy.get(el.cards).contains(cardName).click();
  };
};

export default new HomePage();
