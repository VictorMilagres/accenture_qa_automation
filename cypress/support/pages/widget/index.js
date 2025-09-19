import { el } from "./elements.js";

class HomePage {
  // elementos
  get startStopButton() {
    return cy.get(el.startStopBtn);
  }

  get resetButton() {
    return cy.get(el.resetBtn);
  }

  get progressBar() {
    return cy.get('.progress-bar');
  }

  // inicia a progress bar
  start() {
    this.startStopButton.click();
  }

  // pausa a progress bar
  stop() {
    this.startStopButton.click();
  }

  // valida que o valor atual é igual ao esperado
  validateValue(expectedPercent) {
    this.progressBar
      .invoke('attr', 'aria-valuenow')
      .then(val => {
        expect(Number(val)).to.eq(Number(expectedPercent));
      });
  }

  // valida que o valor atual é menor ou igual ao máximo
  validateMaxValue(maxPercent) {
    this.progressBar
      .invoke('attr', 'aria-valuenow')
      .then(val => {
        expect(Number(val)).to.be.lte(Number(maxPercent));
      });
  }

  waitUntil100ThenReset() {
    this.progressBar
      .invoke('attr', 'aria-baluenow')
      .then(val => {
       expect(Number(val)).to.be.gte(100);
    });
    this.resetButton.click();
  }

  // reset da progress bar
  reset() {
    this.resetButton.click();
  }
}

export default new HomePage();
