import { el } from "./elements.js";

class ItemsPage {
  accessItems(itemName) {
    cy.get(el.items).contains(itemName).click()
  }
}

export default new ItemsPage()
