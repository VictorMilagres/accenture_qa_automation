import { el } from "./elements.js";

class HomePage {
  get startStopButton() {
    return cy.get(el.startStopBtn);
  }

  get resetButton() {
    return cy.get(el.resetBtn);
  }

  get progressBar() {
    return cy.get('.progress-bar');
  }

  start() {
    this.startStopButton.click();
  }

  stop() {
    this.startStopButton.click();
  }

  validateValue(expectedPercent) {
    this.progressBar
      .invoke('attr', 'aria-valuenow')
      .then(val => {
        expect(Number(val)).to.eq(Number(expectedPercent));
      });
  }

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

  reset() {
    this.resetButton.click();
  }
}

export default new HomePage();
