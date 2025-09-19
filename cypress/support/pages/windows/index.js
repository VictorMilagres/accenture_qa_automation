import { el } from "./elements.js";

class WindowsPage {
  openNewWindow() {
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      });
    });
    cy.get(el.windowBtn).click();
    }

  validateText(text) {
    cy.contains(text).should('be.visible');
  }
};

export default new WindowsPage();
