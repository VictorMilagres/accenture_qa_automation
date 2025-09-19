import { el } from "./elements.js";

class InteractionsPage {
// get all items from the list
  getListItems() {
    return cy.get(el.numbersList);
  }

// converts item text to number
  parseItemText(text) {
    const map = { 'One': 1, 'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5 };
    return map[text] || Number(text);
  }

  // returns array of numbers from the current list
  getCurrentNumbers() {
    return this.getListItems().then($items => {
      return $items.toArray().map(el => this.parseItemText(el.innerText));
    });
  }

  // drag-and-drop
  dragItem(fromIndex, toIndex) {
    this.getListItems().then($items => {
      const from = $items[fromIndex];
      const to = $items[toIndex];
      const toRect = to.getBoundingClientRect();

      cy.wrap(from)
        .trigger('mousedown', { which: 1, force: true })
        .trigger('mousemove', {
          clientX: toRect.x + toRect.width / 2,
          clientY: toRect.y + toRect.height / 2,
          force: true
        })
        .trigger('mouseup', { force: true });
    });
  }

  sortListAscending() {
    this.getCurrentNumbers().then(numbers => {
      const sortedNumbers = [...numbers].sort((a, b) => a - b);

      // go to each position and move the correct item there
      sortedNumbers.forEach((num, targetIndex) => {
        this.getCurrentNumbers().then(current => {
          const currentIndex = current.indexOf(num);
          if (currentIndex !== targetIndex) {
            this.dragItem(currentIndex, targetIndex);
          }
        });
      });
    });
  }

  validateOrder() {
    this.getCurrentNumbers().then(numbers => {
      const sorted = [...numbers].sort((a, b) => a - b);
      expect(numbers).to.deep.eq(sorted);
    });
  }
}

export default new InteractionsPage();
